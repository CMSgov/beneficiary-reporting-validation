import * as Joi from 'joi';
import { OrganizationContactSchema } from '../lib/schema/organization-contact';

describe('OrganizationContactSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      firstName: 'First',
      lastName: 'Name',
      email: 'me@me.com',
      phone: '1234567890',
      phoneExtension: '123456'
    }, OrganizationContactSchema);
    expect(result.error).toBeNull();
  });

  it('should allow null phoneExtension', () => {
    const result = Joi.validate({
      phoneExtension: null,
    }, OrganizationContactSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow unknown fields', () => {
    const result = Joi.validate({
      someRandomProp: 'should not work'
    }, OrganizationContactSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for firstName', () => {
    const result = Joi.validate({
      firstName: ' '
    }, OrganizationContactSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for lastName', () => {
    const result = Joi.validate({
      lastName: ' '
    }, OrganizationContactSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for phone', () => {
    const result = Joi.validate({
      phone: ' '
    }, OrganizationContactSchema);
    expect(result.error).not.toBeNull();
  });
});
