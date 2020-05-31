import { IsInt, Max, IsNotEmpty, IsIn, Validate, MaxLength, IsBoolean } from 'class-validator';

import { RequiredString } from '../custom-validators';

export class NotificationSchema {
  @IsNotEmpty()
  @IsInt()
  @Max(99999999999)
  userId!: number;

  @IsNotEmpty()
  @IsInt()
  @Max(99999999999)
  organizationId!: number;

  @IsNotEmpty()
  @IsIn(['ERROR', 'NOTIFICATION'])
  messageType!: string;

  @Validate(RequiredString)
  @MaxLength(255)
  message!: string;

  @IsNotEmpty()
  @IsBoolean()
  read!: boolean;

  get allowableFields() {
    return [
      'userId',
      'organizationId',
      'messageType',
      'message',
      'read',
    ];
  }
}
