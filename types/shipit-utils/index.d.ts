// Type definitions for shipit-utils 1.4
// Project: https://github.com/shipitjs/shipit-utils
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import shipit = require("shipit");

export type GruntOrShipit = typeof shipit | {};
export type EmptyCallback = () => void;

export function equalValues(value: any[]): void;
export function getShipit(gruntOrShipit: GruntOrShipit): typeof shipit;
export function getShipit(gruntOrShipit: GruntOrShipit): typeof shipit;
export function registerTask(gruntOrShipit: GruntOrShipit, name: string, dependenciesOrTask: string[] | EmptyCallback): typeof shipit;
export function runTask(gruntOrShipit: {}): void;
