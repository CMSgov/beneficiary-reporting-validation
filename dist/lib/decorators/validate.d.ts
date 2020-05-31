import 'reflect-metadata';
export declare function payload(target: Object, propertyKey: string | symbol, parameterIndex: number): void;
export declare function Validate<T>(schema: new () => T): MethodDecorator;
