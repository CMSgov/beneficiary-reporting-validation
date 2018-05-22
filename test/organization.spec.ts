import * as Joi from 'joi';
import { OrganizationSchema } from '../lib/schema/organization';

describe('OrganizationSchema', () => {
  describe('groupSize()', () => {

    it('should validate correctly for 100+', () => {
      const result = Joi.validate({ name: 'a', groupSize: '100 or More Individual Eligible Clinicians' }, OrganizationSchema);
      expect(result.error).toBeNull();
    });

    it('should validate correctly for 25-99', () => {
      const result = Joi.validate({ name: 'a', groupSize: '25 - 99 Individual Eligible Clinicians' }, OrganizationSchema);
      expect(result.error).toBeNull();
    });

    it('should validate correctly for 2-24', () => {
      const result = Joi.validate({ name: 'a', groupSize: '2 - 24 Individual Eligible Clinicians' }, OrganizationSchema);
      expect(result.error).toBeNull();
    });

    it('should not validate when we have extra unnecessary white space', () => {
      const result = Joi.validate({ name: 'a', groupSize: '100 or More Individual Eligible Clinicians   ' }, OrganizationSchema);
      expect(result.error).not.toBeNull();
    });
  });
});