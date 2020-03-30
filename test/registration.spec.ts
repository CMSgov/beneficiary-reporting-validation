import * as Joi from '@hapi/joi';
import { RegistrationSchema } from '../lib/schema/registration';

describe('RegistrationSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      bsrRegistered: true,
      cahpsRegistered: false,
    }, RegistrationSchema);
    expect(result.error).toBeNull();
  });

  it('should not allow null value for bsrRegistered', () => {
    const result = Joi.validate({
      bsrRegistered: null,
      cahpsRegistered: false,
    }, RegistrationSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow null value for cahpsRegistered', () => {
    const result = Joi.validate({
      bsrRegistered: true,
      cahpsRegistered: null,
    }, RegistrationSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow wmissing prop bsrRegistered', () => {
    const result = Joi.validate({
      cahpsRegistered: false,
    }, RegistrationSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow wmissing prop cahpsRegistered', () => {
    const result = Joi.validate({
      bsrRegistered: true,
    }, RegistrationSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow unknown fields', () => {
    const result = Joi.validate({
      someRandomProp: 'should not work'
    }, RegistrationSchema);
    expect(result.error).not.toBeNull();
  });
});
