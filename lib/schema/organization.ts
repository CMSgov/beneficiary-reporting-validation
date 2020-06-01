import { IsOptional, Validate, MaxLength, Matches, IsString, IsEnum } from 'class-validator';

import { RequiredString } from '../custom-validators';
import { Regexes } from '../regexes';

export enum GroupSize {
  OneHundredOrGreater = '100 or More Individual Eligible Clinicians',
  TwentyFiveNinetyNine = '25 - 99 Individual Eligible Clinicians',
  TwoTwentyFour = '2 - 24 Individual Eligible Clinicians'
}

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
  @IsEnum(GroupSize)
  groupSize!: string;

  get allowableFields() {
    return [
      'name',
      'nickname',
      'groupSize',
    ];
  }
}
