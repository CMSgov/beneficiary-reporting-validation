import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { isValid } from 'date-fns'

@ValidatorConstraint({ name: 'dateString', async: false })
export class DateString implements ValidatorConstraintInterface {
  validate(text: string, _: ValidationArguments) {
    return typeof text === 'string' && (isValid(new Date(text)));
  }
}
