import { OrganizationContactSchema } from '../lib/schema/organization-contact';
import { ValidateSchema } from '../lib';

describe('OrganizationContactSchema', () => {
  it('should validate correctly', () => {
    const result = ValidateSchema<OrganizationContactSchema>({
      firstName: 'First.',
      lastName: 'Name.',
      email: 'me@me.com',
      phone: '1234567890',
      phoneExtension: '123456'
    }, OrganizationContactSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null phoneExtension', () => {
    const result = ValidateSchema<OrganizationContactSchema>({
      phoneExtension: null,
    }, OrganizationContactSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should not allow unknown fields', () => {
    const result = ValidateSchema<OrganizationContactSchema>({
      someRandomProp: 'should not work'
    }, OrganizationContactSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should not allow empty value for firstName', () => {
    const result = ValidateSchema<OrganizationContactSchema>({
      firstName: ' '
    }, OrganizationContactSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should not allow empty value for lastName', () => {
    const result = ValidateSchema<OrganizationContactSchema>({
      lastName: ' '
    }, OrganizationContactSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should not allow empty value for phone', () => {
    const result = ValidateSchema<OrganizationContactSchema>({
      phone: ' '
    }, OrganizationContactSchema);
    expect(result.valid).toBeTruthy();
  });
});
