import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { parseISO, isWithinInterval } from 'date-fns'

@ValidatorConstraint({ name: 'inDateRange', async: false })
export class InDateRange implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return isWithinInterval(
      parseISO(text),
      { start: new Date(args.constraints[0]), end: new Date(args.constraints[1]) }
    );
  }
}
