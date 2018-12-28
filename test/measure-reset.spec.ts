import * as Joi from 'joi';
import { MeasureResetSchema } from '../lib/schema/measure-reset';

describe('MeasureResetSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      measures:['CARE-1', 'CARE-2', 'PREV-10'],
      confirmation: false
    }, MeasureResetSchema);
    expect(result.error).toBeNull();
  });

  it('should not allow non string values in array', () => {
    const result = Joi.validate({
      measures: [1, 2, 'CARE-1'],
      confirmation: false
    }, MeasureResetSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow non object type', () => {
    const result = Joi.validate([
      { bad: 1 }
    ], MeasureResetSchema);
    expect(result.error).not.toBeNull();
  });
});
