import { ValidateSchema } from '../lib/index';
import { MockSchema, validModel, invalidModel } from './mocks/mock-schema';

describe('Validation', () => {
  describe('ValidateSchema()', () => {

    it('should validate correctly', () => {
      const result = ValidateSchema<MockSchema>(validModel, MockSchema);
      expect(result).toEqual({ valid: true });
    });

    it('should return error when invalid body supplied', () => {
      const result = ValidateSchema<MockSchema>(null, MockSchema);
      expect(result).toEqual({ valid: false, error: { code: 422, message: 'Invalid Request: An incorrect payload or schemaType was supplied.' } });
    });

    it('should return error when schema is invalid', () => {
      const result = ValidateSchema<MockSchema>(validModel, 'not a schema' as any);
      expect(result).toEqual({ valid: false, error: { code: 422, message: 'Invalid Request: An incorrect payload or schemaType was supplied.' } });
    });

    it('should return error when schema doesn\'t validate', () => {
      const result = ValidateSchema<MockSchema>(invalidModel, MockSchema);
      expect(result.valid).toBeFalsy();
    });
  });
});