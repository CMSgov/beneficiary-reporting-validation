import { IsString, MaxLength, Validate, Matches, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import 'reflect-metadata';

import { RequiredString } from '../custom-validators';
import { Regexes } from '../regexes';
import { SubmissionSchema } from '.';

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

  @ValidateNested()
  @IsOptional()
  @IsArray()
  @Type(() => SubmissionSchema)
  submissions!: SubmissionSchema[];

  get allowableFields() {
    return [
      'name',
      'helpDeskTicket',
      'comments',
    ];
  }
}
