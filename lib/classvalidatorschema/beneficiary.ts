import { registerSchema, ValidationSchema } from "class-validator";
import { Regexes } from '../regexes';

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Unknown = 'UNKNOWN',
}

export const BeneficiaryMap: ValidationSchema = { // using interface here is not required, its just for type-safety
  name: "beneficiarySchema", // this is required, and must be unique
  properties: {
    firstName: [{
      type: "isString"
    },{
      type: "maxLength",
      constraints: [128]
    }, {
      type: "matches",
      constraints: [Regexes.lettersAndSymbolsOnlyWithPeriod]
    }],
    lastName: [{
      type: "maxLength",
      constraints: [128]
    }, {
      type: "matches",
      constraints: [Regexes.lettersAndSymbolsOnlyWithPeriod]
    }],
    gender: [{
      type: "isIn",
      constraints: [Gender]
    }],
    dateOfBirth: [{
      type: "isDate"
    }],
    mrn: [{
      type: "maxLength",
      constraints: [128]
    }],
    comments: [{
      type: "maxLength",
      constraints: [1000]
    }],
    medicalRecordFound: [{
      type: "isOptional"
    }],
    medicalNotQualifiedReason: [{
      type: "isOptional"
    }],
    medicalNotQualifiedDate: [{
      type: "isDate",
    }],
    clinicId: [{
      type: "isNumber"
    }],
    qualificationComments: [{
      type: "isString",
    }, {
      type: "maxLength",
      constraints: [1000]
    }]
  }
};

registerSchema(BeneficiaryMap);
