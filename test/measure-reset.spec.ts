import { MeasureResetSchema } from '../lib/schema/measure-reset';
import { ValidateSchema } from '../lib';

describe('MeasureResetSchema', () => {
  it('should validate correctly', () => {
    const result = ValidateSchema<MeasureResetSchema>({
      measures:['CARE-1', 'CARE-2', 'PREV-10'],
      confirmation: false
    }, MeasureResetSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should not allow non string values in array', () => {
    const result = ValidateSchema<MeasureResetSchema>({
      measures: [1, 2, 'CARE-1'],
      confirmation: false
    }, MeasureResetSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow non object type', () => {
    const result = ValidateSchema<MeasureResetSchema>([{ bad: 1 }], MeasureResetSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should get allowable fields', async () => {
    expect(new MeasureResetSchema().allowableFields).toEqual([
      'measures',
      'confirmation',
    ]);
  });
});
