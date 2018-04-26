import * as Joi from 'joi-browser';
import { Regexes } from '../regexes';

export const ProviderSchema = Joi.object().keys({
  npi: Joi.string().max(10).regex(Regexes.numbersOnly).required(),
  firstName: Joi.string().max(32).regex(Regexes.lettersAndSymbolsOnly).required(),
  lastName: Joi.string().max(32).regex(Regexes.lettersAndSymbolsOnly).required(),
  ein: Joi.string().max(32).regex(Regexes.lettersAndNumbersOnly).optional().allow(null),
  credentials: Joi.string().max(128).regex(Regexes.validCredentials).optional().allow(null)
});
