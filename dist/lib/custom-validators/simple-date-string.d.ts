import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class SimpleDateString implements ValidatorConstraintInterface {
    validate(text: string, _: ValidationArguments): boolean;
}
