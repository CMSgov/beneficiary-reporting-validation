import { Validate, IsString, MaxLength, Matches, IsOptional, IsInt, IsEnum } from 'class-validator';

import { Regexes } from '../regexes';
import { DateString, InDateRange } from '../custom-validators';

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Unknown = 'UNKNOWN',
}

export class BeneficiarySchema {
  @IsOptional()
  @IsString()
  @MaxLength(128)
  @Matches(Regexes.lettersAndSymbolsOnlyWithPeriod)
  firstName!: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @Matches(Regexes.lettersAndSymbolsOnlyWithPeriod)
  lastName!: string;

  @IsOptional()
  @IsString()
  @IsEnum(Gender)
  gender!: string;

  @IsOptional()
  @Validate(DateString)
  dateOfBirth!: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  mrn!: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  comments!: string | null;

  @IsOptional()
  @IsString()
  medicalRecordFound!: string | null;

  @IsOptional()
  @IsString()
  medicalNotQualifiedReason!: string | null;

  @IsOptional()
  @Validate(DateString)
  @Validate(InDateRange, ['2020-01-01','2020-12-31'])
  medicalNotQualifiedDate!: string | null;

  @IsOptional()
  @IsInt()
  clinicId!: string | null;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  qualificationComments!: string | null;

  get allowableFields() {
    return [
      'firstName',
      'lastName',
      'gender',
      'dateOfBirth',
      'mrn',
      'comments',
      'medicalRecordFound',
      'medicalNotQualifiedReason',
      'medicalNotQualifiedDate',
      'clinicId',
      'qualificationComments',
    ];
  }
}
