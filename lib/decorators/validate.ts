import 'reflect-metadata';
import { describe, Schema } from 'joi';
import { ValidateSchema } from '..';

const payloadMetadataKey = Symbol('payload');

enum ActionType {
  Validate,
  PickAllowableFields
}

function pick(obj: { [key: string]: any }, ...keys: string[]): {} {
  return Object.assign({}, ...keys.map(prop => ({ [prop]: obj[prop] })));
}

function getAllowableFields(schemaType: Schema): string[] {
  return Object.keys(describe(schemaType).children);
}

export function payload(target: Object, propertyKey: string | symbol, parameterIndex: number): void {
  let existingPayloadParameters: number[] = Reflect.getOwnMetadata(payloadMetadataKey, target, propertyKey) || [];
  existingPayloadParameters.push(parameterIndex);
  Reflect.defineMetadata(payloadMetadataKey, existingPayloadParameters, target, propertyKey);
}

export function Validate(schemaType: Schema): MethodDecorator {
  return performAction(ActionType.Validate, schemaType);
}

export const PickAllowableFields = function(schemaType: Schema): MethodDecorator {
  return performAction(ActionType.PickAllowableFields, schemaType);
}


function performAction(type: ActionType, schemaType: Schema) {
  return function(target: any, propertyName: string | symbol, descriptor: PropertyDescriptor) {
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

          switch (type) {
            case ActionType.Validate:
              const validation = ValidateSchema(args[parameterIndex], schemaType);
              if (validation && validation.valid === false && validation.error != null) {
                throw new Error(`Request was invalid: ${validation.error.code} ${validation.error.message}`);
              }
              break;
            case ActionType.PickAllowableFields:
              args[parameterIndex] = pick(args[parameterIndex], ...getAllowableFields(schemaType));
              break;
            default:
          }

        }
      }

      return originalMethod.apply(this, args);
    }
  }

}