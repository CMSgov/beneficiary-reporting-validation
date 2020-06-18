import { IsNotEmpty, IsArray, IsBoolean, Validate } from 'class-validator';

import { IsArrayType } from '../custom-validators';

export class MeasureResetSchema {
  @IsNotEmpty()
  @IsArray()
  @Validate(IsArrayType, ['string'])
  measures!: string[];

  @IsNotEmpty()
  @IsBoolean()
  confirmation!: boolean;

  get allowableFields() {
    return [
      'measures',
      'confirmation',
    ];
  }
}
