export declare class MeasureSchema {
    name: string;
    helpDeskTicket: string | null;
    comments: string | null;
    submissions: MeasureSchema[];
    get allowableFields(): string[];
}
