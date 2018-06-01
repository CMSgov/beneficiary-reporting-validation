import * as Joi from 'joi';

export enum NotificationMessageTypes {
  Error = 'ERROR',
  Notification = 'NOTIFICATION'
}

export const NotificationSchema = Joi.object().keys({
  userId: Joi.number().required(),
  organizationId: Joi.number().required(),
  messageType: Joi.string().valid(Object.values(NotificationMessageTypes)).required(),
  message: Joi.string().max(255).required(),
  read: Joi.boolean().required()
});
