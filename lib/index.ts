import 'reflect-metadata';
import * as Joi from 'joi';
import {
  ClinicSchema
} from './schema';

const payloadMetadataKey = Symbol('payload');

export interface ValidationResult {
  valid: boolean;
  error?: {
    code: number;
    message: string;
  }
}

const validateSchema = async function(payload: { [key: string]: any }, schemaType: Joi.JoiObject): Promise<ValidationResult> {
  if (typeof payload !== 'object' || payload === null) {
    return { valid: false, error: { code: 422, message: 'Invalid Request: An incorrect payload was supplied.' } }
  }

  try {
    const valid = await Joi.validate(payload, schemaType);
  } catch(error) {
    return { valid: false, error: { code: 422, message: `Request was invalid: ${error}` } }
  }

  return { valid: true };
}

export const Payload = function(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  let existingPayloadParameters: number[] = Reflect.getOwnMetadata(payloadMetadataKey, target, propertyKey) || [];
  existingPayloadParameters.push(parameterIndex);
  Reflect.defineMetadata(payloadMetadataKey, existingPayloadParameters, target, propertyKey);
}

export const Validate = function(schemaType: Joi.JoiObject) {

  return function(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let originalMethod = descriptor.value;

    descriptor.value = async function() {
      let payloadParameters: number[] = Reflect.getOwnMetadata(payloadMetadataKey, target, propertyName);
      if (payloadParameters) {
        for (let parameterIndex of payloadParameters) {
          if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
            throw new Error('Missing payload.');
          }
          console.log(payloadParameters, parameterIndex);
          const validation = await validateSchema(arguments[0], schemaType);
          if (validation && validation.error) {
            throw new Error(`Request was invalid: ${validation.error.code} ${validation.error.message}`);
          }
          // .then(valid => {
          //   if (valid.error) {
          //     throw new Error(`Request was invalid: ${valid.error.code} ${valid.error.message}`);
          //   }
          // });
        }
      }

      return originalMethod.apply(this, arguments);
    }
  }
}
