import { ValidateSchema, Validate, payload } from '../lib/index';
import { MockSchema, validModel, invalidModel } from './mocks/mock-schema';

import * as assert from 'assert';

describe('Validation', () => {
  describe('ValidateSchema()', () => {

    it('should validate correctly', () => {
      const result = ValidateSchema(validModel, MockSchema);
      assert.deepEqual(result, { valid: true });
    });

    it('should return error when invalid body supplied', () => {
      const result = ValidateSchema(null, MockSchema);
      assert.deepEqual(result, { valid: false, error: { code: 422, message: 'Invalid Request: An incorrect payload was supplied.' } });
    });

    it('should return error when invalid schema supplied', () => {
      const result = ValidateSchema(validModel, null);
      assert.deepEqual(result, { valid: false, error: { code: 422, message: 'Request was invalid: ValidationError: \"value\" must be one of [null]' } });
    });

    it('should return error when schema doesn\'t validate', () => {
      const result = ValidateSchema(invalidModel, MockSchema);
      assert.deepEqual(result, { valid: false, error: { code: 422, message: `Request was invalid: ValidationError: \"notGonnaWork\" is not allowed` } });
    });
  });

  describe('Decorators', () => {
    class Fixture {
      @Validate(MockSchema)
      testingMethod(@payload data: any): number {
        return 3;
      }
    }

    it('should return if the payload validates', () => {
      const fixture = new Fixture();
      const result = fixture.testingMethod(validModel);
      assert.equal(result, 3);
    });

    it('should throw if the payload does not validate', () => {
      const fixture = new Fixture();
      assert.throws(() => fixture.testingMethod(invalidModel));
    });

    it('should not throw if the payload does validate', () => {
      const fixture = new Fixture();
      assert.doesNotThrow(() => fixture.testingMethod(validModel));
    });
  });
});