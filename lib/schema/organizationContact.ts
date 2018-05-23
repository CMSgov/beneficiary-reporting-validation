import * as Joi from 'joi';
import { Regexes } from '../regexes';

export const OrganizationContactSchema = Joi.object().keys({
  firstName: Joi.string().max(32).regex(Regexes.lettersAndSymbolsOnly).required(),
  lastName: Joi.string().max(32).regex(Regexes.lettersAndSymbolsOnly).required(),
  email: Joi.string().max(100).regex(Regexes.email).required(),
  phone: Joi.string().length(10).regex(Regexes.numbersOnly).required(),
  phoneExtension: Joi.string().optional().max(6).allow(null)
});
