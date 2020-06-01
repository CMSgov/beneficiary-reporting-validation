export declare class OrganizationAddressSchema {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
    isPrimary: boolean;
    get allowableFields(): string[];
}
