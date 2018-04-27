import { Schema } from 'joi';

import { ValidateSchema } from '../lib/index';
import { Validate, payload } from '../lib/decorators';
import { MockSchema, validModel, invalidModel } from './mocks/mock-schema';

describe('Validation', () => {
  describe('ValidateSchema()', () => {

    it('should validate correctly', () => {
      const result = ValidateSchema(validModel, MockSchema);
      expect(result).toEqual({ valid: true });
    });

    it('should return error when invalid body supplied', () => {
      const result = ValidateSchema(null, MockSchema);
      expect(result).toEqual({ valid: false, error: { code: 422, message: 'Invalid Request: An incorrect payload was supplied.' } });
    });

    it('should return error when schema doesn\'t validate', () => {
      const result = ValidateSchema(invalidModel, MockSchema);
      expect(result).toEqual({ valid: false, error: { code: 422, message: `Request was invalid: ValidationError: \"notGonnaWork\" is not allowed` } });
    });
  });
});