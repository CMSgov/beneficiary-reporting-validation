import * as Joi from '@hapi/joi';
import { validate } from "class-validator";

export interface ValidationResult {
  valid: boolean;
  error?: {
    code: number;
    message: string;
  }
}

export const ValidateSchema = function (payload: any, schemaType: Joi.Schema): ValidationResult {
  if (typeof payload !== 'object' || payload === null) {
    return { valid: false, error: { code: 422, message: 'Invalid Request: An incorrect payload was supplied.' } }
  }

  const result = Joi.validate(payload, schemaType);

  if (result.error != null) {
    return { valid: false, error: { code: 422, message: `Request was invalid: ${result.error}` } }
  }

  return { valid: true };
}
