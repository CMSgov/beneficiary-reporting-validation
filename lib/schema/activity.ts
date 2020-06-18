import { IsString, Validate } from 'class-validator';

import { RequiredString } from '../custom-validators';

export class ActivitySchema {
  @Validate(RequiredString)
  @IsString()
  action!: string;

  get allowableFields() {
    return ['action'];
  }
}