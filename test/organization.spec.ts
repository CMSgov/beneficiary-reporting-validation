import * as Joi from '@hapi/joi';
import { OrganizationSchema } from '../lib/schema/organization';

describe('OrganizationSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      name: 'Name',
      nickname: '1234567',
      groupSize: '100 or More Individual Eligible Clinicians'
    }, OrganizationSchema);
    expect(result.error).toBeNull();
  });

  it('should allow partial objects', () => {
    const result = Joi.validate({
      name: 'New name',
    }, OrganizationSchema);
    expect(result.error).toBeNull();
  });

  it('should allow null nickname', () => {
    const result = Joi.validate({
      nickname: null,
    }, OrganizationSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow unknown fields', () => {
    const result = Joi.validate({
      someRandomProp: 'should not work'
    }, OrganizationSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for name', () => {
    const result = Joi.validate({
      name: ' '
    }, OrganizationSchema);
    expect(result.error).not.toBeNull();
  });

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