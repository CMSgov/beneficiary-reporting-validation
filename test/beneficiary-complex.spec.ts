import * as Joi from '@hapi/joi';
import { BeneficiaryComplexSchema } from '../lib/schema/beneficiary.complex';

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
    medicalNotQualifiedDate: "2007-11-06T00:00:00.000Z",
    clinicId: 2536773,
    qualificationComments: "This is qualification comment",
}

describe('BeneficiaryComplexSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
        ...goodBene,
        measures: [{
            ...goodMeasure,
            submissions: [{
                ...goodSubmission
            }]
        }]
    }, BeneficiaryComplexSchema);
    expect(result.error).toBeNull();
  });

  it('should fail validation if there are extra bene properties', () => {
    const result = Joi.validate({
        ...goodBene,
        bogus: 'property',
        measures: [{
            ...goodMeasure,
            submissions: [{
                ...goodSubmission
            }]
        }]
    }, BeneficiaryComplexSchema);
    expect(result.error).toBeTruthy();
  });

  it('should fail validation if there are extra measure properties', () => {
    const result = Joi.validate({
        ...goodBene,
        measures: [{
            bogus: 'property',
            ...goodMeasure,
            submissions: [{
                ...goodSubmission
            }]
        }]
    }, BeneficiaryComplexSchema);
    expect(result.error).toBeTruthy();
  });

  it.only('should fail validation if there are extra submission properties', () => {
    const result = Joi.validate({
        ...goodBene,
        measures: [{
            ...goodMeasure,
            submissions: [{
                bogus: 'property',
                ...goodSubmission
            }]
        }]
    }, BeneficiaryComplexSchema);
    expect(result.error).toBeTruthy();
  });
});
