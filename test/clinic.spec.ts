import { ClinicSchema } from '../lib/schema/clinic';
import { ValidateSchema } from '../lib';

describe('ClinicSchema', () => {
  it('should validate correctly', async () => {
    const result = ValidateSchema<ClinicSchema>({
      clinicId: '123456789',
      name: 'Clinic Name',
      address1: null,
      address2: null,
      city: 'My City',
      state: 'PA',
      zipCode: '12345'
    }, ClinicSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow partial objects with required fields', async () => {
    const result = ValidateSchema<ClinicSchema>({
      clinicId: '123456789',
      name: 'Clinic'
    }, ClinicSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null address1', async () => {
    const result = ValidateSchema<ClinicSchema>({
      clinicId: '123456789',
      name: 'Clinic',
      address1: null,
    }, ClinicSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null address2', async () => {
    const result = ValidateSchema<ClinicSchema>({
      clinicId: '123456789',
      name: 'Clinic',
      address2: null,
    }, ClinicSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null city', async () => {
    const result = ValidateSchema<ClinicSchema>({
      clinicId: '123456789',
      name: 'Clinic',
      city: null,
    }, ClinicSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null state', async () => {
    const result = ValidateSchema<ClinicSchema>({
      clinicId: '123456789',
      name: 'Clinic',
      state: null,
    }, ClinicSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null zipCode', async () => {
    const result = ValidateSchema<ClinicSchema>({
      clinicId: '123456789',
      name: 'Clinic',
      zipCode: null,
    }, ClinicSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should not allow unknown fields', async () => {
    const result = ValidateSchema<ClinicSchema>({
      clinicId: '123456789',
      name: 'Clinic',
      someRandomProp: 'should not work',
    }, ClinicSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow empty value for clinicId', async () => {
    const result = ValidateSchema<ClinicSchema>({
      clinicId: ' ',
      name: 'Clinic',
    }, ClinicSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow empty value for name', async () => {
    const result = ValidateSchema<ClinicSchema>({
      clinicId: '123456789',
      name: ' ',
    }, ClinicSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should get allowable fields', async () => {
    expect(new ClinicSchema().allowableFields).toEqual([
      'clinicId',
      'name',
      'address1',
      'address2',
      'city',
      'state',
      'zipCode'
    ]);
  });
});
