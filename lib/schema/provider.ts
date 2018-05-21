import * as Joi from 'joi';
import { Regexes } from '../regexes';

export const ProviderSchema = Joi.object().keys({
  id: Joi.any(),
  created_at: Joi.any(),
  updated_at: Joi.any(),
  npi: Joi.string().max(10).regex(Regexes.numbersOnly).required(),
  firstName: Joi.string().max(50).regex(Regexes.lettersAndSymbolsOnly).required(),
  lastName: Joi.string().max(50).regex(Regexes.lettersAndSymbolsOnly).required(),
  ein: Joi.string().max(15).regex(Regexes.lettersAndNumbersOnly).optional().allow(null),
  credentials: Joi.string().max(128).regex(Regexes.validCredentials).optional().allow(null),
  organizationId: Joi.number().max(11).allow(null)
});
