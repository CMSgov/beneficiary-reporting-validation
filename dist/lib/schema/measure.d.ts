import 'reflect-metadata';
import { SubmissionSchema } from '.';
export declare class MeasureSchema {
    name: string;
    helpDeskTicket: string | null;
    comments: string | null;
    submissions: SubmissionSchema[];
    get allowableFields(): string[];
}
