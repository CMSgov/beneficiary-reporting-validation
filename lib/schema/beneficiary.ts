import * as Joi from 'joi';
import { Regexes } from '../regexes';

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Unknown = 'UNKNOWN',
}

export const BeneficiaryMap = {
  firstName: Joi.string().max(128).regex(Regexes.lettersAndSymbolsOnly).required(),
  lastName: Joi.string().max(128).regex(Regexes.lettersAndSymbolsOnly).required(),
  gender: Joi.string().valid(Object.values(Gender)).required(),
  dateOfBirth: Joi.date().required(),
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
