export declare class SubmissionSchema {
    attribute: string;
    value: string | null;
    scope: string | null;
    get allowableFields(): string[];
}
