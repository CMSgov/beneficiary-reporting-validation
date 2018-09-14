import * as Joi from 'joi';
import { Regexes } from '../regexes';

export const MeasureMap = {
  name: Joi.string().max(128).regex(Regexes.lettersNumbersAndSymbolsOnly).trim().required(), // candidate key, not updatable
  helpDeskTicket: Joi.string().max(15).optional().allow(null),
  comments: Joi.string().max(1000).optional().allow(null)
};

export const MeasureSchema = Joi.object(MeasureMap);
