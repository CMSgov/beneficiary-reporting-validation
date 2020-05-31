import { IsString, MaxLength, Matches, IsOptional, IsIn, IsDateString, IsInt, MinDate, MaxDate } from 'class-validator';

import { Regexes } from '../regexes';

export class BeneficiarySchema {
  @IsString()
  @MaxLength(128)
  @Matches(Regexes.lettersAndSymbolsOnlyWithPeriod)
  firstName!: string;

  @IsString()
  @MaxLength(128)
  @Matches(Regexes.lettersAndSymbolsOnlyWithPeriod)
  lastName!: string;
  
  @IsString()
  @IsIn(['MALE', 'FEMALE', 'UNKNOWN'])
  gender!: string;

  @IsDateString()
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
  @IsDateString()
  @MinDate(new Date('2020-01-01'))
  @MaxDate(new Date('2020-12-31'))
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
