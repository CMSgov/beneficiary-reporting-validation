export interface ValidationResult {
    valid: boolean;
    error?: {
        code: number;
        message: string;
    };
}
export declare const ValidateSchema: <T>(payload: any, schema: new () => T) => ValidationResult;
