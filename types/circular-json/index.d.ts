// Type definitions for circular-json 0.4
// Project: https://github.com/WebReflection/circular-json
// Definitions by: Jonathan Pevarnek <https://github.com/jpevarnek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export function parse(text: string, reviver?: (key: any, value: any) => any): any;
export function stringify(value: any, replacer?: ((key: string, value: any) => any) | Array<number | string> | null, space?: any, placeholder?: boolean): string;
