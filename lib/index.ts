import * as Joi from 'joi';
import {
  ClinicSchema
} from './schema';

export interface ValidationResult {
  valid: boolean;
  error?: {
    code: number;
    message: string;
  }
}

function getSchema(schema: string): any {
  switch (schema) {
    case 'clinic':
      return ClinicSchema;
    default:
      return null;
  }
}

export const Validate = async (body: any, schema: string): Promise<ValidationResult> => {
  const currentSchema = getSchema(schema);
  if (!currentSchema) {
    return { valid: false, error: { code: 422, message: 'Invalid Request: Incorrect schema type supplied' } }
  }

  const valid = await Joi.validate(body, currentSchema);

  if (valid && valid.error !== null) {
    return { valid: false, error: { code: 422, message: `Request was invalid: ${valid.error}` } }
  }

  return { valid: true };
}
