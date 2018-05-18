// Type definitions for rc
// Project: https://github.com/dominictarr/rc
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare function rc(
	name: string,
	defaults?: any,
	argv?: {} | null,
	parse?: ((content: string) => any) | null
): any;

export = rc;