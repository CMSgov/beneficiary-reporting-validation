import * as Joi from 'joi';
import { Regexes } from '../regexes';

export const OrganizationAddressSchema = Joi.object().keys({
  address1: Joi.string().max(128).regex(Regexes.validAddress).required(),
  address2: Joi.string().max(128).regex(Regexes.validAddress).optional().allow(null),
  city: Joi.string().max(128).required(),
  state: Joi.string().length(2).regex(Regexes.stateAbbreviations).required(),
  zipCode: Joi.string().min(5).max(10).regex(Regexes.validZipCode).required(),
  isPrimary: Joi.boolean().required()
});
