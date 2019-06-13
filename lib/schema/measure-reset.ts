import * as Joi from '@hapi/joi';

export const MeasureResetMap = {
  measures: Joi.array().items(Joi.string()).required(),
  confirmation: Joi.boolean().required()
};

export const MeasureResetSchema = Joi.object(MeasureResetMap);