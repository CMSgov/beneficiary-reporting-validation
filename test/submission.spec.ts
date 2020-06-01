import { SubmissionSchema } from '../lib/schema/submission';
import { ValidateSchema } from '../lib';

describe('SubmissionSchema', () => {
  it('should validate correctly', () => {
    const result = ValidateSchema<SubmissionSchema>({
      attribute: 'attriute string',
      value: 'value',
      scope: 'scope value'
    }, SubmissionSchema);
    expect(result.valid).toBeTruthy();
  });

  it('should allow null value:', () => {
    const result = ValidateSchema<SubmissionSchema>({
      value: null,
    }, SubmissionSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should allow null scope', () => {
    const result = ValidateSchema<SubmissionSchema>({
      scope: null
    }, SubmissionSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow unknown fields', () => {
    const result = ValidateSchema<SubmissionSchema>({
      someRandomProp: 'should not work'
    }, SubmissionSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should not allow empty value for attribute', () => {
    const result = ValidateSchema<SubmissionSchema>({
      attribute: ' '
    }, SubmissionSchema);
    expect(result.valid).toBeFalsy();
  });

  it('should get allowable fields', () => {
    expect(new SubmissionSchema().allowableFields).toEqual([
      'attribute',
      'value',
      'scope',
    ]);
  });
});
