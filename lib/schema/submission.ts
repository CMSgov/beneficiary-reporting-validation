import { IsString, MaxLength, Validate, IsOptional } from 'class-validator';

import { RequiredString } from '../custom-validators';

export class SubmissionSchema {
  @Validate(RequiredString)
  @IsString()
  @MaxLength(255)
  attribute!: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  value!: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  scope!: string | null;

  get allowableFields() {
    return [
      'attribute',
      'value',
      'scope',
    ];
  }
}
