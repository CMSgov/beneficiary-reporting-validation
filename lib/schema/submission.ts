import * as Joi from 'joi';

export const SubmissionSchema = Joi.object().keys({
  attribute: Joi.string().max(255).required(),
  value: Joi.string().max(255).allow(null).empty(''),
  scope: Joi.string().max(255).allow(null).empty(''),
  comments: Joi.string().allow(null),
});
