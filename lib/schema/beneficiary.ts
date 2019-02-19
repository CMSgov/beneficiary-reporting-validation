import * as Joi from 'joi';
import { Regexes } from '../regexes';

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Unknown = 'UNKNOWN',
}

export const BeneficiaryMap = {
  firstName: Joi.string().max(128).regex(Regexes.lettersAndSymbolsOnlyWithPeriod),
  lastName: Joi.string().max(128).regex(Regexes.lettersAndSymbolsOnlyWithPeriod),
  gender: Joi.string().valid(Object.values(Gender)),
  dateOfBirth: Joi.date(),
  mrn: Joi.string().max(128).allow(null),
  comments: Joi.string().max(1000).allow(null),
  medicalRecordFound: Joi.string().allow(null),
  medicalNotQualifiedReason: Joi.string().allow(null),
  medicalNotQualifiedDate: Joi.date().allow(null),
  clinicId: Joi.number().allow(null),
  qualificationComments: Joi.string().max(1000).allow(null)
};

export const BeneficiarySchema = Joi.object().keys(BeneficiaryMap);
