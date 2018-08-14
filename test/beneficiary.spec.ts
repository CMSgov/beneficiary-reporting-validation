import * as Joi from 'joi';
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
