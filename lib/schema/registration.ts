import * as Joi from '@hapi/joi';

export const RegistrationMap = {
  bsrRegistered: Joi.boolean().required(),
  cahpsRegistered: Joi.boolean().required(),
};

export const RegistrationSchema = Joi.object(RegistrationMap);
