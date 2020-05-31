import { IsNotEmpty, IsBoolean } from 'class-validator';

export class RegistrationSchema {
  @IsNotEmpty()
  @IsBoolean()
  bsrRegistered!: boolean;

  @IsNotEmpty()
  @IsBoolean()
  cahpsRegistered!: boolean;

  get allowableFields() {
    return [
      'bsrRegistered',
      'cahpsRegistered',
    ];
  }
}
