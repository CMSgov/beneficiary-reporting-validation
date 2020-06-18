import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from "class-validator";

@ValidatorConstraint({ name: 'requiredString', async: false })
export class RequiredString implements ValidatorConstraintInterface {
  validate(text: string, _: ValidationArguments) {
    return typeof text === 'string' && text.trim().length > 0;
  }
}
