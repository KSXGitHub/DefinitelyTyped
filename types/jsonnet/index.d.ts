// Type definitions for jsonnet
// Project: https://github.com/yosuke-furukawa/node-jsonnet
// Definitions by: Hookclaw <https://github.com/hookclaw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
declare module "jsonnet" {
    class Jsonnet {
        constructor();
        eval(code: string): any;
        evalFile(): any;
        destroy(): void;
    }
    export = Jsonnet;
}
