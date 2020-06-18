import { IsNotEmpty, IsBoolean, IsOptional, Validate, MaxLength, Length, Matches, IsString } from 'class-validator';

import { RequiredString } from '../custom-validators';
import { Regexes } from '../regexes';

export class OrganizationAddressSchema {
  @Validate(RequiredString)
  @Matches(Regexes.validAddress)
  @IsString()
  @MaxLength(128)
  address1!: string;

  @IsOptional()
  @Matches(Regexes.validAddress)
  @IsString()
  @MaxLength(128)
  address2!: string;

  @Validate(RequiredString)
  @IsString()
  @MaxLength(128)
  city!: string;

  @Validate(RequiredString)
  @IsString()
  @MaxLength(2)
  @Matches(Regexes.stateAbbreviations)
  state!: string;

  @Validate(RequiredString)
  @IsString()
  @Length(5, 10)
  @Matches(Regexes.validZipCode)
  zipCode!: string;

  @IsNotEmpty()
  @IsBoolean()
  isPrimary!: boolean;

  get allowableFields() {
    return [
      'address1',
      'address2',
      'city',
      'state',
      'zipCode',
      'isPrimary',
    ];
  }
}
