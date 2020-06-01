export declare class ClinicSchema {
    clinicId: string;
    name: string;
    address1: string | null;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: string | null;
    get allowableFields(): string[];
}
