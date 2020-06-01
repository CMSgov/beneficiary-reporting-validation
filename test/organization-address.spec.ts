import { OrganizationAddressSchema } from '../lib/schema/organization-address';
import { ValidateSchema } from '../lib';

describe('OrganizationAddressSchema', () => {
  it('should validate correctly', () => {
    const result = ValidateSchema<OrganizationAddressSchema>({
      address1: 'Address 1',
      address2: null,
      city: 'My city',
      state: 'PA',
      zipCode: '12345',
      isPrimary: true
    }, OrganizationAddressSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null address2', () => {
    const result = ValidateSchema<OrganizationAddressSchema>({
      address2: null,
    }, OrganizationAddressSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow unknown fields', () => {
    const result = ValidateSchema<OrganizationAddressSchema>({
      someRandomProp: 'should not work'
    }, OrganizationAddressSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow empty value for city', () => {
    const result = ValidateSchema<OrganizationAddressSchema>({
      city: ' '
    }, OrganizationAddressSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow empty value for address1', () => {
    const result = ValidateSchema<OrganizationAddressSchema>({
      address1: ' '
    }, OrganizationAddressSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should get allowable fields', () => {
    expect(new OrganizationAddressSchema().allowableFields).toEqual([
      'address1',
      'address2',
      'city',
      'state',
      'zipCode',
      'isPrimary',
    ]);
  });
});
