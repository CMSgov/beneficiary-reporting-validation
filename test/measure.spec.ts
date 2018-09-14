import * as Joi from 'joi';
import { MeasureSchema } from '../lib/schema/measure';

describe('MeasureSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      name: 'Measure Name',
      helpDeskTicket: '1234567',
      comments: 'comments'
    }, MeasureSchema);
    expect(result.error).toBeNull();
  });

  it('should allow partial objects', () => {
    const result = Joi.validate({
      name: 'New name',
    }, MeasureSchema);
    expect(result.error).toBeNull();
  });

  it('should allow null helpDeskTicket', () => {
    const result = Joi.validate({
      helpDeskTicket: null,
    }, MeasureSchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null comments', () => {
    const result = Joi.validate({
      comments: null
    }, MeasureSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow unknown fields', () => {
    const result = Joi.validate({
      someRandomProp: 'should not work'
    }, MeasureSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for name', () => {
    const result = Joi.validate({
      name: ' '
    }, MeasureSchema);
    expect(result.error).not.toBeNull();
  });
});
