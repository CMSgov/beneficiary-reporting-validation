import { ProviderSchema } from '../lib/schema/provider';
import { ValidateSchema } from '../lib';

describe('ProviderSchema', () => {
  it('should validate correctly', () => {
    const result = ValidateSchema<ProviderSchema>({
      npi: '123456789',
      firstName: 'First',
      lastName: 'Last',
      ein: '123ertyu',
      credentials: 'Credentials',
      organizationId: 1
    }, ProviderSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null ein', () => {
    const result = ValidateSchema<ProviderSchema>({
      ein: null,
    }, ProviderSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should allow null credentials', () => {
    const result = ValidateSchema<ProviderSchema>({
      credentials: null
    }, ProviderSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow unknown fields', () => {
    const result = ValidateSchema<ProviderSchema>({
      someRandomProp: 'should not work'
    }, ProviderSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow empty value for npi', () => {
    const result = ValidateSchema<ProviderSchema>({
      npi: ' '
    }, ProviderSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow empty value for firstName', () => {
    const result = ValidateSchema<ProviderSchema>({
      firstName: ' '
    }, ProviderSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow empty value for lastName', () => {
    const result = ValidateSchema<ProviderSchema>({
      lastName: ' '
    }, ProviderSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should get allowable fields', () => {
    expect(new ProviderSchema().allowableFields).toEqual([
      'npi',
      'firstName',
      'lastName',
      'ein',
      'credentials',
      'organizationId',
    ]);
  });
});
