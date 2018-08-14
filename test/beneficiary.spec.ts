import * as Joi from 'joi';
import { BeneficiarySchema, BeneficiaryFieldsSchema } from '../lib/schema/beneficiary';

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

describe('BeneficiaryFieldsSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      firstName: 'Joe',
      lastName: 'Doe',
      gender: 'MALE',
      dateOfBirth: Date.now().toString()
    }, BeneficiaryFieldsSchema);
    expect(result.error).toBeNull();
  });

  it('should allow partial objects', () => {
    const result = Joi.validate({
      firstName: 'Joe'
    }, BeneficiaryFieldsSchema);
    expect(result.error).toBeNull();
  });

  it('should allow null firstName', () => {
    const result = Joi.validate({
      firstName: null
    }, BeneficiaryFieldsSchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null lastName', () => {
    const result = Joi.validate({
      lastName: null
    }, BeneficiaryFieldsSchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null dateOfBirth', () => {
    const result = Joi.validate({
      dateOfBirth: null
    }, BeneficiaryFieldsSchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null gender', () => {
    const result = Joi.validate({
      gender: null
    }, BeneficiaryFieldsSchema);
    expect(result.error).not.toBeNull();
  });
});
