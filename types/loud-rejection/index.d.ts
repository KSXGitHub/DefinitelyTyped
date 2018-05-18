// Type definitions for loud-rejection 1.6
// Project: https://github.com/sindresorhus/loud-rejection#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = loudRejection;

declare function loudRejection(log?: (stack: string) => void): void;
