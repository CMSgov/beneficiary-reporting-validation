import 'reflect-metadata';

import { ValidateSchema } from '..';

const payloadMetadataKey = Symbol('payload');

type SchemaFunctions = { readonly allowableFields: string[] };

enum ActionType {
  Validate,
  PickAllowableFields
}

function pick(obj: { [key: string]: any }, ...keys: string[]): {} {
  return Object.assign({}, ...keys.map(prop => ({ [prop]: obj[prop] })));
}

export function payload(target: Object, propertyKey: string | symbol, parameterIndex: number): void {
  let existingPayloadParameters: number[] = Reflect.getOwnMetadata(payloadMetadataKey, target, propertyKey) || [];
  existingPayloadParameters.push(parameterIndex);
  Reflect.defineMetadata(payloadMetadataKey, existingPayloadParameters, target, propertyKey);
}

export function Validate<T extends SchemaFunctions>(schema: new () => T): MethodDecorator {
  return performAction(ActionType.Validate, schema);
}

export const PickAllowableFields = function<T extends SchemaFunctions>(schema: new () => T): MethodDecorator {
  return performAction(ActionType.PickAllowableFields, schema);
}

function performAction<T extends SchemaFunctions>(type: ActionType, schema: new () => T) {
  return function(target: any, propertyName: string | symbol, descriptor: PropertyDescriptor) {
    // typescript makes this branch nearly impossible to test
    /* istanbul ignore next */
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
              const validation = ValidateSchema<T>(args[parameterIndex], schema);
              if (validation && !validation.valid && validation.error != null) {
                throw new Error(`Request was invalid: ${validation.error.code} ${validation.error.message}`);
              }
              break;
            case ActionType.PickAllowableFields:
              console.log(...new schema().allowableFields)
              args[parameterIndex] = pick(args[parameterIndex], ...new schema().allowableFields);
              break;
            // this will never be used
            /* istanbul ignore next */
            default:
          }

        }
      }

      return originalMethod.apply(this, args);
    }
  }
}