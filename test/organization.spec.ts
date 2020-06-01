import { OrganizationSchema } from '../lib/schema/organization';
import { ValidateSchema } from '../lib';

describe('OrganizationSchema', () => {
  it('should validate correctly', () => {
    const result = ValidateSchema<OrganizationSchema>({
      name: 'Name',
      nickname: '1234567',
      groupSize: '100 or More Individual Eligible Clinicians'
    }, OrganizationSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow partial objects', () => {
    const result = ValidateSchema<OrganizationSchema>({
      name: 'New name',
    }, OrganizationSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null nickname', () => {
    const result = ValidateSchema<OrganizationSchema>({
      nickname: null,
    }, OrganizationSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow unknown fields', () => {
    const result = ValidateSchema<OrganizationSchema>({
      someRandomProp: 'should not work'
    }, OrganizationSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow empty value for name', () => {
    const result = ValidateSchema<OrganizationSchema>({
      name: ' '
    }, OrganizationSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should get allowable fields', () => {
    expect(new OrganizationSchema().allowableFields).toEqual([
      'name',
      'nickname',
      'groupSize',
    ]);
  });

  describe('groupSize()', () => {
    it('should validate correctly for 100+', () => {
      const result = ValidateSchema<OrganizationSchema>({
        name: 'a',
        groupSize: '100 or More Individual Eligible Clinicians'
      }, OrganizationSchema);
      expect(result.valid).toBeTruthy();
    });

    it('should validate correctly for 25-99', () => {
      const result = ValidateSchema<OrganizationSchema>({
        name: 'a',
        groupSize: '25 - 99 Individual Eligible Clinicians'
      }, OrganizationSchema);
      expect(result.valid).toBeTruthy();
    });

    it('should validate correctly for 2-24', () => {
      const result = ValidateSchema<OrganizationSchema>({
        name: 'a',
        groupSize: '2 - 24 Individual Eligible Clinicians'
      }, OrganizationSchema);
      expect(result.valid).toBeTruthy();
    });

    it('should not validate when we have extra unnecessary white space', () => {
      const result = ValidateSchema<OrganizationSchema>({
        name: 'a',
        groupSize: '100 or More Individual Eligible Clinicians   '
      }, OrganizationSchema);
      expect(result.valid).toBeFalsy();
    });
  });
});