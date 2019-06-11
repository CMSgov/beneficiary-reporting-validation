import * as Joi from '@hapi/joi';
import { SubmissionSchema } from '../lib/schema/submission';

describe('SubmissionSchema', () => {
  it('should validate correctly', () => {
    const result = Joi.validate({
      attribute: 'attriute string',
      value: 'value',
      scope: 'scope value'
    }, SubmissionSchema);
    expect(result.error).toBeNull();
  });

  it('should allow null value:', () => {
    const result = Joi.validate({
      value: null,
    }, SubmissionSchema);
    expect(result.error).not.toBeNull();
  });

  it('should allow null scope', () => {
    const result = Joi.validate({
      scope: null
    }, SubmissionSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow unknown fields', () => {
    const result = Joi.validate({
      someRandomProp: 'should not work'
    }, SubmissionSchema);
    expect(result.error).not.toBeNull();
  });

  it('should not allow empty value for attribute', () => {
    const result = Joi.validate({
      attribute: ' '
    }, SubmissionSchema);
    expect(result.error).not.toBeNull();
  });
});
