import { IsString, MaxLength, Validate, Matches, IsOptional } from 'class-validator';

import { RequiredString } from '../custom-validators';
import { Regexes } from '../regexes';

export class MeasureSchema {
  @Validate(RequiredString)
  @IsString()
  @Matches(Regexes.lettersNumbersAndSymbolsOnly)
  @MaxLength(128)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(15)
  helpDeskTicket!: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  comments!: string | null;

  get allowableFields() {
    return [
      'name',
      'helpDeskTicket',
      'comments',
    ];
  }
}
