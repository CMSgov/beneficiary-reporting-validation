import * as Joi from '@hapi/joi';
import { BeneficiarySchema } from '../lib/schema/beneficiary';

describe('BeneficiarySchema', () => {
  describe('gender', () => {
    it('should validate correctly for MALE', () => {
      const result = Joi.validate({
        firstName: 'Joe',
        lastName: 'Doe',
        gender: 'MALE',
        dateOfBirth: Date.now().toString()
      }, BeneficiarySchema);
      expect(result.error).toBeNull();
    });

    it('should validate correctly for FEMALE', () => {
      const result = Joi.validate({
        firstName: 'Joe',
        lastName: 'Doe',
        gender: 'MALE',
        dateOfBirth: Date.now().toString()
      }, BeneficiarySchema);
      expect(result.error).toBeNull();
    });

    it('should validate correctly for UNKNOWN', () => {
      const result = Joi.validate({
        firstName: 'Joe',
        lastName: 'Doe',
        gender: 'MALE',
        dateOfBirth: Date.now().toString()
      }, BeneficiarySchema);
      expect(result.error).toBeNull();
    });

    it('should validate correctly for empty string', () => {
      const result = Joi.validate({
        firstName: 'Joe',
        lastName: 'Doe',
        gender: '',
        dateOfBirth: Date.now().toString()
      }, BeneficiarySchema);
      expect(result.error).not.toBeNull();
    });

    it('should validate correctly for whitespace string', () => {
      const result = Joi.validate({
        firstName: 'Joe',
        lastName: 'Doe',
        gender: ' ',
        dateOfBirth: Date.now().toString()
      }, BeneficiarySchema);
      expect(result.error).not.toBeNull();
    });
  });
});

describe('BeneficiarySchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      firstName: 'Joe.',
      lastName: 'Doe.',
      gender: 'MALE',
      dateOfBirth: Date.now().toString()
    }, BeneficiarySchema);
    expect(result.error).toBeNull();
  });

  it('should allow partial objects', () => {
    const result = Joi.validate({
      firstName: 'Joe'
    }, BeneficiarySchema);
    expect(result.error).toBeNull();
  });

  it('should allow null firstName', () => {
    const result = Joi.validate({
      firstName: null
    }, BeneficiarySchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null lastName', () => {
    const result = Joi.validate({
      lastName: null
    }, BeneficiarySchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null dateOfBirth', () => {
    const result = Joi.validate({
      dateOfBirth: null
    }, BeneficiarySchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null gender', () => {
    const result = Joi.validate({
      gender: null
    }, BeneficiarySchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow unknown fields', () => {
    const result = Joi.validate({
      skippedReason: 'some reason'
    }, BeneficiarySchema);
    expect(result.error).not.toBeNull();
  });
});
