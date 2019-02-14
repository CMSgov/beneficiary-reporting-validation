import * as Joi from 'joi';
import { Regexes } from '../regexes';

export const OrganizationContactMap = {
  firstName: Joi.string().max(32).regex(Regexes.lettersAndSymbolsOnly).trim().required(),
  lastName: Joi.string().max(32).regex(Regexes.lettersAndSymbolsOnly).trim().required(),
  email: Joi.string().max(100).regex(Regexes.email).required(),
  phone: Joi.string().length(10).regex(Regexes.numbersOnly).trim().required(),
  phoneExtension: Joi.string().max(6).regex(Regexes.numbersOnly).optional().allow(null)
};

export const OrganizationContactSchema = Joi.object(OrganizationContactMap);
