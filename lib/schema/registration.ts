import * as Joi from 'joi';
import { Regexes } from '../regexes';

export const RegistrationSchema = Joi.object().keys({
  groupReporting: Joi.boolean().required(),
  cahpsRegistered: Joi.boolean().required(),
});
