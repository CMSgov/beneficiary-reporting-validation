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

export const Validate = async (body: { [key: string]: any }, schemaType: Joi.SchemaLike): Promise<ValidationResult> => {
  if (typeof body !== 'object' || body === null) {
    return { valid: false, error: { code: 422, message: 'Invalid Request: An incorrect body was supplied.' } }
  }

  try {
    const valid = await Joi.validate(body, schemaType);
  } catch(error) {
    return { valid: false, error: { code: 422, message: `Request was invalid: ${error}` } }
  }

  return { valid: true };
}
