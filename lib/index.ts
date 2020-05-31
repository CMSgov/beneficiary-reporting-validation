import { validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';

export interface ValidationResult {
  valid: boolean;
  error?: {
    code: number;
    message: string;
  }
}

export const ValidateSchema = function<T>(payload: any, schema: new () => T): ValidationResult {
  if (!(schema instanceof Object) || typeof payload !== 'object' || payload === null) {
    return { valid: false, error: { code: 422, message: 'Invalid Request: An incorrect payload or schemaType was supplied.' } }
  }

  const errors = validateSync(plainToClass(schema, payload), {
    validationError: { target: false },
    whitelist: true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
  });
  if (errors.length > 0) {
    return {
      valid: false,
      error: {
        code: 422,
        message: `Request was invalid: ${JSON.stringify(errors)}`
      }
    }
  }

  return { valid: true };
}



