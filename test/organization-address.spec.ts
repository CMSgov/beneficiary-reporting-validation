import * as Joi from '@hapi/joi';
import { OrganizationAddressSchema } from '../lib/schema/organization-address';

describe('OrganizationAddressSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      address1: 'Address 1',
      address2: null,
      city: 'My city',
      state: 'PA',
      zipCode: '12345',
      isPrimary: true
    }, OrganizationAddressSchema);
    expect(result.error).toBeNull();
  });

  it('should allow null address2', () => {
    const result = Joi.validate({
      address2: null,
    }, OrganizationAddressSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow unknown fields', () => {
    const result = Joi.validate({
      someRandomProp: 'should not work'
    }, OrganizationAddressSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for city', () => {
    const result = Joi.validate({
      city: ' '
    }, OrganizationAddressSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for address1', () => {
    const result = Joi.validate({
      address1: ' '
    }, OrganizationAddressSchema);
    expect(result.error).not.toBeNull();
  });
});
