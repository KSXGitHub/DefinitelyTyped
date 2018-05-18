// Type definitions for jQuery.jNotify 1.0
// Project: http://jnotify.codeplex.com
// Definitions by: James Curran <https://github.com/jamescurran>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Project by: Fabio Franzini
// TypeScript Version: 2.8

/// <reference types="jquery"/>

interface JNotifyInitOptions {
    oneAtTime?: boolean;
    appendType?: string;
}

interface JNotifyOptions {
    text?: string;
    type?: string;
    showIcon?: boolean;
    permanent?: boolean;
    disappearTime?: number;
}

interface JQuery {
    jnotifyInizialize(options?: JNotifyInitOptions);
    jnotifyAddMessage(options?: JNotifyOptions);
}
