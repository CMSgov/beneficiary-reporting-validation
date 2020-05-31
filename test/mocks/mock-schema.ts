import { IsString, Validate, MaxLength, Matches } from 'class-validator';

import { Regexes } from '../../lib/regexes';
import { RequiredString } from '../../lib/custom-validators';

export class MockSchema {
  @Validate(RequiredString)
  @IsString()
  @MaxLength(30)
  @Matches(Regexes.lettersAndNumbersOnly)
  id!: string;

  @Validate(RequiredString)
  @IsString()
  @MaxLength(100)
  @Matches(Regexes.lettersNumbersAndSymbolsOnly)
  firstName!: string;

  @Validate(RequiredString)
  @IsString()
  @MaxLength(100)
  @Matches(Regexes.lettersNumbersAndSymbolsOnly)
  lastName!: string;

  get allowableFields() {
    return ['id', 'firstName', 'lastName'];
  }
}

export const validModel = {
  id: '1',
  firstName: 'Firstname',
  lastName: 'Lastname'
}

export const invalidModel = {
  id: '1',
  firstName: 'Firstname',
  lastName: 'Lastname',
  notGonnaWork: 'But let\'s try'
}

export const invalidModelTwo = {
  id: ' ',
  firstName: false,
  lastName: 3,
}
