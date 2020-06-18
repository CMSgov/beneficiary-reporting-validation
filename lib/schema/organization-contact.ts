import { IsOptional, Validate, MaxLength, Matches, IsString } from 'class-validator';

import { RequiredString } from '../custom-validators';
import { Regexes } from '../regexes';

export class OrganizationContactSchema {
  @Validate(RequiredString)
  @Matches(Regexes.lettersAndSymbolsOnlyWithPeriod)
  @IsString()
  @MaxLength(32)
  firstName!: string;

  @Validate(RequiredString)
  @Matches(Regexes.lettersAndSymbolsOnlyWithPeriod)
  @IsString()
  @MaxLength(32)
  lastName!: string;

  @Validate(RequiredString)
  @Matches(Regexes.email)
  @IsString()
  @MaxLength(100)
  email!: string;

  @Validate(RequiredString)
  @Matches(Regexes.numbersOnly)
  @IsString()
  @MaxLength(10)
  phone!: string;

  @IsOptional()
  @Matches(Regexes.numbersOnly)
  @IsString()
  @MaxLength(6)
  phoneExtension!: string;

  get allowableFields() {
    return [
      'firstName',
      'lastName',
      'email',
      'phone',
      'phoneExtension',
    ];
  }
}
