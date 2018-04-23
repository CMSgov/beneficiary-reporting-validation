import * as Joi from 'joi';
import { Regexes } from '../../lib/regexes';

export const MockSchema = Joi.object().keys({
  id: Joi.string().max(30).regex(Regexes.lettersAndNumbersOnly).required(),
  firstName: Joi.string().max(100).regex(Regexes.lettersNumbersAndSymbolsOnly).required(),
  lastName: Joi.string().max(100).regex(Regexes.lettersNumbersAndSymbolsOnly).required()
});
