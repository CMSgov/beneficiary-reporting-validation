import * as Joi from 'joi';

export const ActivityMap = {
  action: Joi.string().required()
};

export const ActivitySchema = Joi.object(ActivityMap);
