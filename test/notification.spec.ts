import { NotificationSchema } from '../lib/schema/notification';
import { ValidateSchema } from '../lib';

describe('NotificationSchema', () => {
  it('should validate correctly', () => {
    const result = ValidateSchema<NotificationSchema>({
      userId: 1,
      organizationId: 1,
      messageType: 'ERROR',
      message: 'message here',
      read: true
    }, NotificationSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should not allow unknown message types', () => {
    const result = ValidateSchema<NotificationSchema>({
      messageType: 'NOT_KNOWN'
    }, NotificationSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow unknown fields', () => {
    const result = ValidateSchema<NotificationSchema>({
      someRandomProp: 'should not work'
    }, NotificationSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow empty value for message', () => {
    const result = ValidateSchema<NotificationSchema>({
      message: ' '
    }, NotificationSchema);
    expect(result.valid).toBeFalsy();
  });
});
