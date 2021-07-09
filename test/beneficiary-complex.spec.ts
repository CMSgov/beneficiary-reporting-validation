import { BeneficiaryComplexSchema } from '../lib/schema/beneficiary.complex';
import { ValidateSchema } from '../lib';

const goodMeasure = {
    name: "PREV-13",
    helpDeskTicket: null,
    comments: "string",
};

const goodSubmission = {
    attribute: "patient-was-screened",
    value: "Y",
    scope: "2016-10-20"
};

const goodBene = {
    id: 183635540,
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1955-11-06T00:00:00.000Z",
    comments: "Some comments here",
    medicalRecordFound: "NO",
    medicalNotQualifiedReason: "IN_HOSPICE",
    medicalNotQualifiedDate: new Date('2021-02-06').toISOString(),
    clinicId: 2536773,
    qualificationComments: "This is qualification comment",
}

describe('BeneficiaryComplexSchema', () => {
  it('should validate correctly', () => {
    const result = ValidateSchema<BeneficiaryComplexSchema>({
      ...goodBene,
      measures: [{
        ...goodMeasure,
        submissions: [{
          ...goodSubmission
        }]
      }]
    }, BeneficiaryComplexSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should fail validation if there are extra bene properties', () => {
    const result = ValidateSchema<BeneficiaryComplexSchema>({
      ...goodBene,
      bogus: 'property',
      measures: [{
        ...goodMeasure,
        submissions: [{
          ...goodSubmission
        }]
      }]
    }, BeneficiaryComplexSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should fail validation if there are extra measure properties', () => {
    const result = ValidateSchema<BeneficiaryComplexSchema>({
      ...goodBene,
      measures: [{
        bogus: 'property',
        ...goodMeasure,
        submissions: [{
          ...goodSubmission
        }]
      }]
    }, BeneficiaryComplexSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should fail validation if there are extra submission properties', () => {
    const result = ValidateSchema<BeneficiaryComplexSchema>({
      ...goodBene,
      measures: [{
        ...goodMeasure,
        submissions: [{
          bogus: 'property',
          ...goodSubmission
        }]
      }]
    }, BeneficiaryComplexSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should fail validation if there are bad nested values for measure', () => {
    const result = ValidateSchema<BeneficiaryComplexSchema>({
      ...goodBene,
      measures: [{
        ...goodMeasure,
        helpDeskTicket: 'somelongertextthatshouldnotbeallowedbecauseitsmorethan15chars',
        submissions: [{
          ...goodSubmission
        }]
      }]
    }, BeneficiaryComplexSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should fail validation if there are bad nested values for submission', () => {
    const result = ValidateSchema<BeneficiaryComplexSchema>({
      ...goodBene,
      measures: [{
        ...goodMeasure,
        submissions: [{
          ...goodSubmission,
          attribute: 12345 // should be a string only
        }]
      }]
    }, BeneficiaryComplexSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should get allowable fields', () => {
    expect(new BeneficiaryComplexSchema().allowableFields).toEqual([
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
      'id',
      'measures'
    ]);
  });
});
