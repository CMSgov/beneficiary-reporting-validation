import { IsString, IsNotEmpty, IsInt,  MaxLength, Validate, Matches, IsOptional } from 'class-validator';

import { RequiredString } from '../custom-validators';
import { Regexes } from '../regexes';

export class ProviderSchema {
  @Validate(RequiredString)
  @IsString()
  @MaxLength(10)
  @Matches(Regexes.numbersOnly)
  npi!: string;

  @Validate(RequiredString)
  @IsString()
  @MaxLength(50)
  @Matches(Regexes.lettersAndSymbolsOnly)
  firstName!: string;

  @Validate(RequiredString)
  @IsString()
  @MaxLength(50)
  @Matches(Regexes.lettersAndSymbolsOnly)
  lastName!: string;

  @IsOptional()
  @IsString()
  @MaxLength(15)
  @Matches(Regexes.lettersAndNumbersOnly)
  ein!: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @Matches(Regexes.validCredentials)
  credentials!: string | null;

  @IsNotEmpty()
  @IsInt()
  organizationId!: number;

  get allowableFields() {
    return [
      'npi',
      'firstName',
      'lastName',
      'ein',
      'credentials',
      'organizationId',
    ];
  }
}
