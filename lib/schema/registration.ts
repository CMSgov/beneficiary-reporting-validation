import * as Joi from 'joi';

export const RegistrationSchema = Joi.object().keys({
  groupReporting: Joi.boolean().required(),
  cahpsRegistered: Joi.boolean().required(),
});
