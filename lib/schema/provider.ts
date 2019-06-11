import * as Joi from '@hapi/joi';
import { Regexes } from '../regexes';

export const ProviderMap = {
  npi: Joi.string().max(10).regex(Regexes.numbersOnly).trim().required(),
  firstName: Joi.string().max(50).regex(Regexes.lettersAndSymbolsOnly).trim().required(),
  lastName: Joi.string().max(50).regex(Regexes.lettersAndSymbolsOnly).trim().required(),
  ein: Joi.string().max(15).regex(Regexes.lettersAndNumbersOnly).optional().allow(null),
  credentials: Joi.string().max(128).regex(Regexes.validCredentials).optional().allow(null),
  organizationId: Joi.number().required()
};

export const ProviderSchema = Joi.object(ProviderMap);
