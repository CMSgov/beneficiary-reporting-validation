export declare enum GroupSize {
    OneHundredOrGreater = "100 or More Individual Eligible Clinicians",
    TwentyFiveNinetyNine = "25 - 99 Individual Eligible Clinicians",
    TwoTwentyFour = "2 - 24 Individual Eligible Clinicians"
}
export declare class OrganizationSchema {
    name: string;
    nickname: string;
    groupSize: string;
    get allowableFields(): string[];
}
