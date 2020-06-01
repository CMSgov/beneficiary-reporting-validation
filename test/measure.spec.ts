import { MeasureSchema } from '../lib/schema/measure';
import { ValidateSchema } from '../lib';

describe('MeasureSchema', () => {
  it('should validate correctly', () => {
    const result = ValidateSchema<MeasureSchema>({
      name: 'Measure Name',
      helpDeskTicket: '1234567',
      comments: 'comments'
    }, MeasureSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow partial objects', () => {
    const result = ValidateSchema<MeasureSchema>({
      name: 'New name',
    }, MeasureSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null helpDeskTicket', () => {
    const result = ValidateSchema<MeasureSchema>({
      helpDeskTicket: null,
    }, MeasureSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should allow null comments', () => {
    const result = ValidateSchema<MeasureSchema>({
      comments: null
    }, MeasureSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow unknown fields', () => {
    const result = ValidateSchema<MeasureSchema>({
      someRandomProp: 'should not work'
    }, MeasureSchema);
    expect(result.valid).toBeFalsy();

  });

  it('should not allow empty value for name', () => {
    const result = ValidateSchema<MeasureSchema>({
      name: ' '
    }, MeasureSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should get allowable fields', async () => {
    expect(new MeasureSchema().allowableFields).toEqual([
      'name',
      'helpDeskTicket',
      'comments',
    ]);
  });

  it('should get allowable fields', async () => {
    expect(new MeasureSchema().allowableFields).toEqual([
      'name',
      'helpDeskTicket',
      'comments',
    ]);
  });
});
