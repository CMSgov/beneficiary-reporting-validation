import { BeneficiarySchema } from './beneficiary';
import { MeasureSchema } from './';
export declare class BeneficiaryComplexSchema extends BeneficiarySchema {
    id: number;
    measures: MeasureSchema[];
    get allowableFields(): string[];
}
