import * as Joi from 'joi';

export const SubmissionMap = {
  attribute: Joi.string().max(255).trim().required(), // composite candidate key
  value: Joi.string().max(255).allow(null).empty(''),
  scope: Joi.string().max(255).allow(null).empty('')
};

export const SubmissionSchema = Joi.object(SubmissionMap);
