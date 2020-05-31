import { IsOptional, Validate, MaxLength, Matches, IsString, IsIn } from 'class-validator';

import { RequiredString } from '../custom-validators';
import { Regexes } from '../regexes';

export class OrganizationSchema {
  @Validate(RequiredString)
  @IsString()
  @MaxLength(128)
  name!: string;

  @IsOptional()
  @Matches(Regexes.containsNonWhitespace)
  @IsString()
  @MaxLength(128)
  nickname!: string;

  @IsOptional()
  @IsString()
  @IsIn([
    '100 or More Individual Eligible Clinicians',
    '25 - 99 Individual Eligible Clinicians',
    '2 - 24 Individual Eligible Clinicians'
  ])
  groupSize!: string;

  get allowableFields() {
    return [
      'name',
      'nickname',
      'groupSize',
    ];
  }
}
