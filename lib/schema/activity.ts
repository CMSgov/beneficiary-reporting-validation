import * as Joi from 'joi';

export const ActivitySchema = Joi.object().keys({
  action: Joi.string().required()
});
