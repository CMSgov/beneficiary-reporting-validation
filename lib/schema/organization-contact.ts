import * as Joi from '@hapi/joi';
import { Regexes } from '../regexes';

export const OrganizationContactMap = {
  firstName: Joi.string().max(32).regex(Regexes.lettersAndSymbolsOnlyWithPeriod).trim().required(),
  lastName: Joi.string().max(32).regex(Regexes.lettersAndSymbolsOnlyWithPeriod).trim().required(),
  email: Joi.string().max(100).regex(Regexes.email).required(),
  phone: Joi.string().length(10).regex(Regexes.numbersOnly).trim().required(),
  phoneExtension: Joi.string().max(6).regex(Regexes.numbersOnly).optional().allow(null)
};

export const OrganizationContactSchema = Joi.object(OrganizationContactMap);
