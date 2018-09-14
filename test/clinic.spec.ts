import * as Joi from 'joi';
import { ClinicSchema } from '../lib/schema/clinic';

describe('ClinicSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      clinicId: '123456789',
      name: 'Clinic Name',
      address1: null,
      address2: null,
      city: 'My City',
      state: 'PA',
      zipCode: '12345',
      organizationId: 1
    }, ClinicSchema);
    expect(result.error).toBeNull();
  });

  it('should allow partial objects', () => {
    const result = Joi.validate({
      clinicId: '123456789',
      name: 'Clinic',
      organizationId: 1
    }, ClinicSchema);
    expect(result.error).toBeNull();
  });

  it('should allow null address1', () => {
    const result = Joi.validate({
      address1: null,
    }, ClinicSchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null address2', () => {
    const result = Joi.validate({
      address2: null
    }, ClinicSchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null city', () => {
    const result = Joi.validate({
      city: null
    }, ClinicSchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null state', () => {
    const result = Joi.validate({
      state: null
    }, ClinicSchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null zipCode', () => {
    const result = Joi.validate({
      zipCode: null
    }, ClinicSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow unknown fields', () => {
    const result = Joi.validate({
      someRandomProp: 'should not work'
    }, ClinicSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for clinicId', () => {
    const result = Joi.validate({
      clinicId: ' '
    }, ClinicSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for name', () => {
    const result = Joi.validate({
      name: ' '
    }, ClinicSchema);
    expect(result.error).not.toBeNull();
  });
});
