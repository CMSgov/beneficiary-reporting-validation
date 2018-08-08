import * as Joi from 'joi';
import { Regexes } from '../regexes';

export enum MeasureConfirmedOptions {
  Y = 'Y',
  N = 'N',
  NCD = 'NCD',
  DE = 'DE',
  NOCAR = 'NOCAR',
  NOAGE = 'NOAGE',
  NOGENDER = 'NOGENDER'
}

export const MeasureMap = {
  name: Joi.string().max(128).regex(Regexes.lettersNumbersAndSymbolsOnly).required(), // candidate key, not updatable
  confirmed: Joi.string().valid(Object.values(MeasureConfirmedOptions)).optional().allow(null),
  skippedReason: Joi.string().max(1024).optional().allow(null),
  helpDeskTicket: Joi.string().max(15).optional().allow(null),
  comments: Joi.string().optional().allow(null)
};

export const MeasureSchema = Joi.object(MeasureMap);
