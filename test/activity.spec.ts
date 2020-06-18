import { ActivitySchema } from '../lib/schema/activity';
import { ValidateSchema } from '../lib/index';

describe('ActivitySchema', () => {
  it('should validate correctly', () => {
    const result = ValidateSchema<ActivitySchema>({
      action: false // should be string
    }, ActivitySchema);
    expect(result.valid).toBeFalsy();
  });

  it('should validate correctly', () => {
    const result = ValidateSchema<ActivitySchema>({
      action: ' ' // should not be empty also checking white space
    }, ActivitySchema);
    expect(result.valid).toBeFalsy();
  });

  it('should validate correctly', () => {
    const result = ValidateSchema<ActivitySchema>({
      action: 'passes'
    }, ActivitySchema);
    expect(result.valid).toBeTruthy();
  });

  it('should get allowable fields', () => {
    expect(new ActivitySchema().allowableFields).toEqual([
      'action',
    ]);
  });
});
