import * as Joi from 'joi';
import {
  lettersAndNumbersOnly,
  lettersNumbersAndSymbolsOnly,
  lettersAndSymbolsOnly,
  validAddress,
  validZipCode
} from '../regexes';

export const ClinicSchema = Joi.object().keys({
  clinicId: Joi.string().max(30).regex(lettersAndNumbersOnly).required(),
  name: Joi.string().max(100).regex(lettersNumbersAndSymbolsOnly).required(),
  address1: Joi.string().max(100).regex(validAddress).optional().allow(null),
  address2: Joi.string().max(100).regex(validAddress).optional().allow(null),
  city: Joi.string().max(50).regex(lettersAndSymbolsOnly).optional().allow(null),
  // state: Joi.string().optional().allow(null),
  zipCode: Joi.string().min(5).max(10).regex(validZipCode).optional().allow(null),
  organizationId: Joi.number().optional().allow(null)
});
