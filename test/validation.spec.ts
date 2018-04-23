import { Validate } from '../lib/index';
import { MockSchema } from './mocks/mock-schema';

import * as assert from 'assert';

describe('Validation', () => {
  describe('Validate()', () => {

    it('should validate correctly', async () => {
      const body = {
        id: '1',
        firstName: 'Firstname',
        lastName: 'Lastname'
      };
      const result = await Validate(body, MockSchema);
      assert.deepEqual(result, { valid: true });
    });

    it('should return error when invalid body supplied', async () => {
      const body = null;
      const result = await Validate(body, MockSchema);
      assert.deepEqual(result, { valid: false, error: { code: 422, message: 'Invalid Request: An incorrect body was supplied.' } });
    });

    it('should return error when invalid schema supplied', async () => {
      const body = {
        id: '1',
        firstName: 'Firstname',
        lastName: 'Lastname'
      };
      const result = await Validate(body, null);
      assert.deepEqual(result, { valid: false, error: { code: 422, message: 'Request was invalid: ValidationError: \"value\" must be one of [null]' } });
    });

    it('should return error when schema doesn\'t validate', async () => {
      const body = {
        id: '1',
        firstName: 'Firstname',
        lastName: 'Lastname',
        notGonnaWork: 'But let\'s try'
      };
      const result = await Validate(body, MockSchema);
      assert.deepEqual(result, { valid: false, error: { code: 422, message: `Request was invalid: ValidationError: \"notGonnaWork\" is not allowed` } });
    });
  });
});