import { ValidationSchema, validate } from 'class-validator';

export interface ValidationResult {
  valid: boolean;
  error?: {
    code: number;
    message: string;
  }
}

export const  ValidateSchema =  async function (payload: any, schemaType: string): Promise<ValidationResult> {
  if (typeof payload !== 'object' || payload === null) {
    return { valid: false, error: { code: 422, message: 'Invalid Request: An incorrect payload was supplied.' } }
  }

  const result = await validate(schemaType, payload, { validationError: { target: false } });

  if (result.length > 0) {
    return { valid: false, error: { code: 422, message: `Request was invalid due to: ${result}` } }
  }

  return { valid: true };
}
