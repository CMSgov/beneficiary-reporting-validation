import { BeneficiarySchema } from './beneficiary';
import { MeasureSchema, SubmissionSchema } from './';
export declare class BeneficiaryComplexSchema extends BeneficiarySchema {
    id: number;
    measures: MeasureSchema & {
        submissions: SubmissionSchema[];
    };
}
