import * as Joi from 'joi';
import { Regexes } from '../regexes';

export const ClinicSchema = Joi.object().keys({
  clinicId: Joi.string().max(9).regex(Regexes.lettersAndNumbersOnly, 'LettersAndNumbersOnly').required(),
  name: Joi.string().max(100).regex(Regexes.lettersNumbersAndSymbolsOnly, 'LettersNumbersAndSymbolsOnly').regex(Regexes.containsNonWhitespace, 'ContainsNonWhitespace').required(),
  address1: Joi.string().max(100).regex(Regexes.validAddress, 'ValidAddress').optional().allow(null),
  address2: Joi.string().max(100).regex(Regexes.validAddress, 'ValidAddress').optional().allow(null),
  city: Joi.string().max(50).regex(Regexes.lettersAndSymbolsOnly, 'LettersAndSymbolsOnly').optional().allow(null),
  state: Joi.string().optional().allow(null),
  zipCode: Joi.string().min(5).max(10).regex(Regexes.validZipCode, 'ValidZipCode').optional().allow(null),
  organizationId: Joi.number().required()
});
