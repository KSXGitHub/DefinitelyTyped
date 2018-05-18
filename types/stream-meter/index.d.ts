// Type definitions for stream-meter
// Project: https://github.com/brycebaril/node-stream-meter
// Definitions by: TANAKA Koichi <https://github.com/mugeso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
/// <reference types="node" />


import { Transform } from 'stream';

declare function m(maxBytes?: number): m.StreamMeter;

declare namespace m {
    export interface StreamMeter extends Transform {
        constructor(maxBytes?: number): StreamMeter;
        bytes: number;
        maxBytes: number;
    }
}

export = m;
