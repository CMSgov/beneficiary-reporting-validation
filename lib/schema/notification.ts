import * as Joi from 'joi-browser';
import { Regexes } from '../regexes';

export const NotificationSchema = Joi.object().keys({
  userId: Joi.number().required(),
  organizationId: Joi.number().required(),
  messageType: Joi.string().required(),
  message: Joi.string().required()
});
