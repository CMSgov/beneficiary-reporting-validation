import { IsString, MaxLength, Validate, Matches, IsOptional, Length } from 'class-validator';

import { RequiredString } from '../custom-validators';
import { Regexes } from '../regexes';

export class ClinicSchema {
  @Validate(RequiredString)
  @IsString()
  @MaxLength(9)
  @Matches(Regexes.lettersAndNumbersOnly)
  clinicId!: string;

  @Validate(RequiredString)
  @IsString()
  @MaxLength(100)
  @Matches(Regexes.lettersNumbersAndSymbolsOnly)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  @Matches(Regexes.validAddress)
  address1!: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  @Matches(Regexes.validAddress)
  address2!: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  @Matches(Regexes.lettersAndSymbolsOnly)
  city!: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(2)
  @Matches(Regexes.stateAbbreviations)
  state!: string | null;

  @IsOptional()
  @IsString()
  @Length(5, 10)
  @Matches(Regexes.validZipCode)
  zipCode!: string | null;

  get allowableFields() {
    return [
      'clinicId',
      'name',
      'address1',
      'address2',
      'city',
      'state',
      'zipCode',
    ];
  }
}
