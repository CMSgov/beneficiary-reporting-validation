import { Schema } from 'joi';
import * as assert from 'assert';

import { ValidateSchema } from '../lib/index';
import { Validate, payload } from '../lib/decorators';
import { MockSchema, validModel, invalidModel } from './mocks/mock-schema';

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

    let fixture: any;

    beforeEach(() => {
      fixture = new Fixture();
    });

    it('should return if the payload validates', () => {
      const result: any = fixture.testingMethod(validModel);
      assert.equal(result, 3);
    });

    it('should throw if the payload does not validate', () => {
      assert.throws(() => fixture.testingMethod(invalidModel));
    });

    it('should not throw if the payload does validate', () => {
      assert.doesNotThrow(() => fixture.testingMethod(validModel));
    });
  });
});