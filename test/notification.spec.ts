import * as Joi from 'joi';
import { NotificationSchema } from '../lib/schema/notification';

describe('NotificationSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      userId: 1,
      organizationId: 1,
      messageType: 'ERROR',
      message: 'message here',
      read: true
    }, NotificationSchema);
    expect(result.error).toBeNull();
  });

  it('should not allow unknown message types', () => {
    const result = Joi.validate({
      messageType: 'NOT_KNOWN'
    }, NotificationSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow unknown fields', () => {
    const result = Joi.validate({
      someRandomProp: 'should not work'
    }, NotificationSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for message', () => {
    const result = Joi.validate({
      message: ' '
    }, NotificationSchema);
    expect(result.error).not.toBeNull();
  });
});
