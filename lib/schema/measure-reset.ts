import { IsNotEmpty, IsArray, IsBoolean } from 'class-validator';

export class MeasureResetSchema {
  @IsNotEmpty()
  @IsArray()
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
