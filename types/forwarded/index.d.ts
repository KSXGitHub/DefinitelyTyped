// Type definitions for forwarded 0.1
// Project: https://github.com/jshttp/forwarded
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />
import { IncomingMessage } from 'http';

export = forwarded;

declare function forwarded(req: IncomingMessage): string[];
