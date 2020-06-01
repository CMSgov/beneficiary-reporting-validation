export declare enum Gender {
    Male = "MALE",
    Female = "FEMALE",
    Unknown = "UNKNOWN"
}
export declare class BeneficiarySchema {
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    mrn: string | null;
    comments: string | null;
    medicalRecordFound: string | null;
    medicalNotQualifiedReason: string | null;
    medicalNotQualifiedDate: string | null;
    clinicId: string | null;
    qualificationComments: string | null;
    get allowableFields(): string[];
}
