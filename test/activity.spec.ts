import * as Joi from '@hapi/joi';
import { ActivitySchema } from '../lib/schema/activity';

describe('ActivitySchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      action: 'SOME_ACTION'
    }, ActivitySchema);
    expect(result.error).toBeNull();
  });

  it('should not allow empty value for action', () => {
    const result = Joi.validate({
      action: ''
    }, ActivitySchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow unknown fields', () => {
    const result = Joi.validate({
      someRandomProp: 'should not work'
    }, ActivitySchema);
    expect(result.error).not.toBeNull();
  });
});
