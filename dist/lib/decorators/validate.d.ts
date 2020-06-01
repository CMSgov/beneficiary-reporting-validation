import 'reflect-metadata';
declare type SchemaFunctions = {
    readonly allowableFields: string[];
};
export declare function payload(target: Object, propertyKey: string | symbol, parameterIndex: number): void;
export declare function Validate<T extends SchemaFunctions>(schema: new () => T): MethodDecorator;
export declare const PickAllowableFields: <T extends SchemaFunctions>(schema: new () => T) => MethodDecorator;
export {};
