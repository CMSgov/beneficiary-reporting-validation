import * as Joi from 'joi';
import { Regexes } from '../regexes';

export const BeneficiarySchema = Joi.object().keys({
  firstName: Joi.string().max(128).regex(Regexes.lettersAndSymbolsOnly).required(),
  lastName: Joi.string().max(128).regex(Regexes.lettersAndSymbolsOnly).required(),
  gender: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  mrn: Joi.string().max(128).allow(null),
  comments: Joi.string().allow(null),
  skippedReason: Joi.string().allow(null),
  medicalRecordFound: Joi.string().allow(null),
  medicalNotQualifiedReason: Joi.string().allow(null),
  medicalNotQualifiedDate: Joi.date().allow(null),
  clinicId: Joi.number().allow(null),
  qualificationComments: Joi.string().allow(null)
});
