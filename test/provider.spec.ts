import * as Joi from '@hapi/joi';
import { ProviderSchema } from '../lib/schema/provider';

describe('ProviderSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      npi: '123456789',
      firstName: 'First',
      lastName: 'Last',
      ein: '123ertyu',
      credentials: 'Credentials',
      organizationId: 1
    }, ProviderSchema);
    expect(result.error).toBeNull();
  });

  it('should allow null ein', () => {
    const result = Joi.validate({
      ein: null,
    }, ProviderSchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null credentials', () => {
    const result = Joi.validate({
      credentials: null
    }, ProviderSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow unknown fields', () => {
    const result = Joi.validate({
      someRandomProp: 'should not work'
    }, ProviderSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for npi', () => {
    const result = Joi.validate({
      npi: ' '
    }, ProviderSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for firstName', () => {
    const result = Joi.validate({
      firstName: ' '
    }, ProviderSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for lastName', () => {
    const result = Joi.validate({
      lastName: ' '
    }, ProviderSchema);
    expect(result.error).not.toBeNull();
  });
});
