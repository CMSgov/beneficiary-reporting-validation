import { Schema, validate } from 'joi';

export interface ValidationResult {
  valid: boolean;
  error?: {
    code: number;
    message: string;
  }
}

export const ValidateSchema = function (payload: any, schemaType: Schema): ValidationResult {
  if (typeof payload !== 'object' || payload === null) {
    return { valid: false, error: { code: 422, message: 'Invalid Request: An incorrect payload was supplied.' } }
  }

  let result;

  try {
    result = validate(payload, schemaType);
  } catch (error) {
    return { valid: false, error: { code: 422, message: `Request was invalid: ${error}` } }
  }

  if (result.error != null) {
    return { valid: false, error: { code: 422, message: `Request was invalid: ${result.error}` } }
  }

  return { valid: true };
}



