import { IsInt, IsNotEmpty, IsArray, ValidateNested, IsOptional } from 'class-validator';

import { BeneficiarySchema } from './beneficiary';
import { MeasureSchema, SubmissionSchema } from './';

type Measure = MeasureSchema & { submissions: SubmissionSchema[] };

export class BeneficiaryComplexSchema extends BeneficiarySchema {
  @IsNotEmpty()
  @IsInt()
  id!: number;

  @ValidateNested()
  @IsOptional()
  @IsArray()
  measures!: Measure[];

  get allowableFields() {
    return [
      ...new BeneficiarySchema().allowableFields,
      'id',
      'measures'
    ];
  }
}



