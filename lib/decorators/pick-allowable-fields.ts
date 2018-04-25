import * as Joi from 'joi';

function pick(obj: { [key: string]: any }, ...keys: string[]): {} {
  return Object.assign({}, ...keys.map(prop => ({ [prop]: obj[prop] })));
}

function getAllowableFields(schemaType: Joi.Schema): string[] {
  return Object.keys(Joi.describe(schemaType).children);
}

export const PickAllowableFields = function(schemaType: Joi.Schema) {
  return function(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    if (descriptor == null || descriptor.value == null) {
      throw new Error('Invalid decorated method');
    }

    let originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      args[0] = pick(args[0], ...getAllowableFields(schemaType));
      return originalMethod.apply(this, args);
    }
  }
}
