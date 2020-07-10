import { BeneficiarySchema } from '../lib/schema/beneficiary';
import { ValidateSchema } from '../lib';

describe('BeneficiarySchema', () => {
  it('should validate correctly for MALE', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      firstName: 'Joe',
      lastName: 'Doe',
      gender: 'MALE',
      dateOfBirth: '1956-06-06',
    }, BeneficiarySchema);
    expect(result.valid).toBeTruthy();
  });

  it('should validate correctly for FEMALE', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      firstName: 'Joe',
      lastName: 'Doe',
      gender: 'FEMALE',
      dateOfBirth: '1956-06-06'
    }, BeneficiarySchema);
    expect(result.valid).toBeTruthy();
  });

  it('should validate correctly for UNKNOWN', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      firstName: 'Joe',
      lastName: 'Doe',
      gender: 'UNKNOWN',
      dateOfBirth: '1956-06-06'
    }, BeneficiarySchema);
    expect(result.valid).toBeTruthy();
  });

  it('should validate correctly for empty string', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      firstName: 'Joe',
      lastName: 'Doe',
      gender: ' ',
      dateOfBirth: '1956-06-06'
    }, BeneficiarySchema);
    expect(result.valid).toBeFalsy();
  });

  it('should validate correctly for out of range medicalNotQualifiedDate', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      firstName: 'Joe',
      lastName: 'Doe',
      medicalNotQualifiedDate: '2019-02-04',
    }, BeneficiarySchema);
    expect(result.valid).toBeFalsy();
  });

  it('should validate correctly for out in range medicalNotQualifiedDate with MM-DD-YYYY', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      firstName: 'Joe',
      lastName: 'Doe',
      medicalNotQualifiedDate: '02-04-2020',
    }, BeneficiarySchema);
    expect(result.valid).toBeTruthy();
  });

  it('should validate correctly for out in range medicalNotQualifiedDate with YYYY-MM-DD', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      firstName: 'Joe',
      lastName: 'Doe',
      medicalNotQualifiedDate: '2020-02-04',
    }, BeneficiarySchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow partial objects', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      firstName: 'Joe'
    }, BeneficiarySchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null firstName', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      firstName: null
    }, BeneficiarySchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null lastName', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      lastName: null
    }, BeneficiarySchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null dateOfBirth', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      dateOfBirth: null
    }, BeneficiarySchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null gender', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      gender: null
    }, BeneficiarySchema);
    expect(result.valid).toBeTruthy();
  });

  it('should not allow unknown fields', () => {
    const result = ValidateSchema<BeneficiarySchema>({
      skippedReason: 'some reason'
    }, BeneficiarySchema);
    expect(result.valid).toBeFalsy();
  });

  it('should get allowable fields', () => {
    expect(new BeneficiarySchema().allowableFields).toEqual([
      'firstName',
      'lastName',
      'gender',
      'dateOfBirth',
      'mrn',
      'comments',
      'medicalRecordFound',
      'medicalNotQualifiedReason',
      'medicalNotQualifiedDate',
      'clinicId',
      'qualificationComments',
    ]);
  });
});
