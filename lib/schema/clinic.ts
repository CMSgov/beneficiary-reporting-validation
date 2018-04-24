import * as Joi from 'joi';
import { Regexes } from '../regexes';

export const ClinicSchema = Joi.object().keys({
  id: Joi.number().optional().allow(null),
  clinicId: Joi.string().max(30).regex(Regexes.lettersAndNumbersOnly).required(),
  name: Joi.string().max(100).regex(Regexes.lettersNumbersAndSymbolsOnly).required(),
  address1: Joi.string().max(100).regex(Regexes.validAddress).optional().allow(null),
  address2: Joi.string().max(100).regex(Regexes.validAddress).optional().allow(null),
  city: Joi.string().max(50).regex(Regexes.lettersAndSymbolsOnly).optional().allow(null),
  state: Joi.string().optional().allow(null),
  zipCode: Joi.string().min(5).max(10).regex(Regexes.validZipCode).optional().allow(null),
  organizationId: Joi.number().optional().allow(null)
});
