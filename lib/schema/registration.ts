import * as Joi from 'joi';

export const RegistrationMap = {
  groupReporting: Joi.boolean().required(),
  cahpsRegistered: Joi.boolean().required(),
};

export const RegistrationSchema = Joi.object(RegistrationMap);
