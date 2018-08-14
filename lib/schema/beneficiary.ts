import * as Joi from 'joi';
import { Regexes } from '../regexes';

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Unknown = 'UNKNOWN',
}


// These fields are potentially required based on the bene operation being performed.
const firstName = Joi.string().max(128).regex(Regexes.lettersAndSymbolsOnly);
const lastName = Joi.string().max(128).regex(Regexes.lettersAndSymbolsOnly);
const gender = Joi.string().valid(Object.values(Gender));
const dateOfBirth = Joi.date();

// This schema includes required fields, should be used when creating a bene.
export const BeneficiaryMap = {
  firstName: firstName.required(),
  lastName: lastName.required(),
  gender: gender.required(),
  dateOfBirth: dateOfBirth.required(),
  mrn: Joi.string().max(128).allow(null),
  comments: Joi.string().allow(null),
  skippedReason: Joi.string().allow(null),
  medicalRecordFound: Joi.string().allow(null),
  medicalNotQualifiedReason: Joi.string().allow(null),
  medicalNotQualifiedDate: Joi.date().allow(null),
  clinicId: Joi.number().allow(null),
  qualificationComments: Joi.string().allow(null)
};

// This schema only includes optional fields. Should be used on updates.
export const BeneficiaryFields = {
  firstName: firstName,
  lastName: lastName,
  gender: gender,
  dateOfBirth: dateOfBirth,
  mrn: Joi.string().max(128).allow(null),
  comments: Joi.string().allow(null),
  skippedReason: Joi.string().allow(null),
  medicalRecordFound: Joi.string().allow(null),
  medicalNotQualifiedReason: Joi.string().allow(null),
  medicalNotQualifiedDate: Joi.date().allow(null),
  clinicId: Joi.number().allow(null),
  qualificationComments: Joi.string().allow(null)
};

export const BeneficiarySchema = Joi.object().keys(BeneficiaryMap);
export const BeneficiaryFieldsSchema = Joi.object().keys(BeneficiaryFields);
