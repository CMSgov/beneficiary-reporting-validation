import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from "class-validator";

@ValidatorConstraint({ name: 'isArrayType', async: false })
export class IsArrayType implements ValidatorConstraintInterface {
  validate(arr: any[], args: ValidationArguments) {
    return arr.filter(x => typeof x !== args.constraints[0]).length < 1;
  }
}
