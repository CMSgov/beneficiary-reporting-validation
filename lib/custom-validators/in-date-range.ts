import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { isWithinInterval } from 'date-fns'

@ValidatorConstraint({ name: 'inDateRange', async: false })
export class InDateRange implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return isWithinInterval(
      new Date(text),
      { start: new Date(args.constraints[0]), end: new Date(args.constraints[1]) }
    );
  }
}
