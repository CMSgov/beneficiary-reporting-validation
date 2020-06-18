import { RegistrationSchema } from '../lib/schema/registration';
import { ValidateSchema } from '../lib';

describe('RegistrationSchema', () => {
  it('should validate correctly', () => {
    const result = ValidateSchema<RegistrationSchema>({
      bsrRegistered: true,
      cahpsRegistered: false,
    }, RegistrationSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should not allow null value for bsrRegistered', () => {
    const result = ValidateSchema<RegistrationSchema>({
      bsrRegistered: null,
      cahpsRegistered: false,
    }, RegistrationSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow null value for cahpsRegistered', () => {
    const result = ValidateSchema<RegistrationSchema>({
      bsrRegistered: true,
      cahpsRegistered: null,
    }, RegistrationSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow wmissing prop bsrRegistered', () => {
    const result = ValidateSchema<RegistrationSchema>({
      cahpsRegistered: false,
    }, RegistrationSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow wmissing prop cahpsRegistered', () => {
    const result = ValidateSchema<RegistrationSchema>({
      bsrRegistered: true,
    }, RegistrationSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow unknown fields', () => {
    const result = ValidateSchema<RegistrationSchema>({
      someRandomProp: 'should not work'
    }, RegistrationSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should get allowable fields', () => {
    expect(new RegistrationSchema().allowableFields).toEqual([
      'bsrRegistered',
      'cahpsRegistered',
    ]);
  });
});
