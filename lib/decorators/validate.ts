import 'reflect-metadata';
import { Schema } from 'joi';
import { ValidateSchema } from '../';

const payloadMetadataKey = Symbol('payload');

export const payload = function(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  let existingPayloadParameters: number[] = Reflect.getOwnMetadata(payloadMetadataKey, target, propertyKey) || [];
  existingPayloadParameters.push(parameterIndex);
  Reflect.defineMetadata(payloadMetadataKey, existingPayloadParameters, target, propertyKey);
}

export const Validate = function(schemaType: Schema) {
  return function(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    if (descriptor == null || descriptor.value == null) {
      throw new Error('Invalid decorated method');
    }

    let originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      let payloadParameters: number[] = Reflect.getOwnMetadata(payloadMetadataKey, target, propertyName);
      if (payloadParameters) {
        for (let parameterIndex of payloadParameters) {
          if (parameterIndex >= args.length || args[parameterIndex] === undefined) {
            throw new Error('Missing payload.');
          }

          const validation = ValidateSchema(args[parameterIndex], schemaType);
          if (validation && validation.valid === false && validation.error != null) {
            throw new Error(`Request was invalid: ${validation.error.code} ${validation.error.message}`);
          }
        }
      }

      return originalMethod.apply(this, args);
    }
  }
}
