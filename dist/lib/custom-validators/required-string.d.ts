import { ValidatorConstraintInterface, ValidationArguments } from "class-validator";
export declare class RequiredString implements ValidatorConstraintInterface {
    validate(text: string, _: ValidationArguments): boolean;
}
