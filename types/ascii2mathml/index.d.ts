// Type definitions for ascii2mathml 0.5
// Project: https://github.com/runarberg/ascii2mathml
// Definitions by: Muhammad Ragib Hasin <https://github.com/RagibHasin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = A2MML;

declare var A2MML: ascii2mathml;

interface Options {
    decimalMark?: string;
    colSep?: string;
    rowSep?: string;
    display?: 'inline' | 'block';
    dir?: 'ltr' | 'rtl';
    bare?: boolean;
    standalone?: boolean;
    annotate?: boolean;
}

interface ascii2mathml {
    /**
     * Generates a function with default options set to convert
     * ASCIIMath expression to MathML markup.
     * @param options Options
     */
    (options: Options): ascii2mathml;

    /**
     * Converts ASCIIMath expression to MathML markup.
     * @param asciimath ASCIIMath expression
     * @param options Options
     */
    (asciimath: string, options?: Options): string;
}
