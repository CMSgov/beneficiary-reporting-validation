import * as Joi from '@hapi/joi';

export enum NotificationMessageTypes {
  Error = 'ERROR',
  Notification = 'NOTIFICATION'
}

export const NotificationMap = {
  userId: Joi.number().max(99999999999).required(),
  organizationId: Joi.number().max(99999999999).required(),
  messageType: Joi.string().valid(Object.values(NotificationMessageTypes)).required(),
  message: Joi.string().max(255).trim().required(),
  read: Joi.boolean().required()
};

export const NotificationSchema = Joi.object(NotificationMap);
