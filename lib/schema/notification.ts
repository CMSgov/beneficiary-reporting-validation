import * as Joi from 'joi';
import { Regexes } from '../regexes';

export enum Notification {
  Error = 'ERROR',
  Notification = 'NOTIFICATION'
}

export const NotificationSchema = Joi.object().keys({
  userId: Joi.number().max(11).required(),
  organizationId: Joi.number().max(11).required(),
  messageType: Joi.string().valid(Notification.Error, Notification.Notification).required(),
  message: Joi.string().max(255).required(),
  read: Joi.boolean().required()
});
