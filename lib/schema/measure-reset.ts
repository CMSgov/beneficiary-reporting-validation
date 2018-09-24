import * as Joi from 'joi';

export const MeasureResetSchema = Joi.array().items(Joi.string());
