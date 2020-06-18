import { IsInt, IsNotEmpty, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import 'reflect-metadata';

import { BeneficiarySchema } from './beneficiary';
import { MeasureSchema } from './';

export class BeneficiaryComplexSchema extends BeneficiarySchema {
  @IsNotEmpty()
  @IsInt()
  id!: number;

  @ValidateNested()
  @IsOptional()
  @IsArray()
  @Type(() => MeasureSchema)
  measures!: MeasureSchema[];

  get allowableFields() {
    return [
      ...new BeneficiarySchema().allowableFields,
      'id',
      'measures'
    ];
  }
}



