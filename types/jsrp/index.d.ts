// Type definitions for jsrp 0.2
// Project: https://github.com/alax/jsrp
// Definitions by: Harry Shipton <https://github.com/harryshipton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export as namespace jsrp;

export interface ClientOptions {
    username: string;
    password: string;
    length?: 2048 | 4096;
}
export interface ServerOptions {
    verifier: string;
    salt: string;
    length?: 2048 | 4096;
}

export interface Verifier {
    verifier: string;

    salt: string;
}

export class client {
    /** Client SRP constructor */
    constructor();

    /**
     * Initialise the client SRP and calculate needed SRP values
     * @param options - the client options including the username and password
     * @param callback - called when the client instance is ready to use
     */
    init(options: ClientOptions, callback: () => any): void;

    /**
     * Returns the hex representation of the client's A value
     * @returns hex representation of A
     */
    getPublicKey(): string;

    /**
     * Set the salt generated by the server for later computations
     * @param hexSalt - hex value of the salt
     */
    setSalt(hexSalt: string): void;

    /**
     * Sets the server's B value on the client and compute values to complete authentication
     * @param hexB - hex representation of B
     * @throws Will throw an error if the server provides an incorrect value
     */
    setServerPublicKey(hexB: string): void;

    /**
     * Returns the hex representation of the client's M1 proof
     * @returns hex representation of M1
     */
    getProof(): string;

    /**
     * Verifies the server's M2 proof against the client's. Only call after using {@link getProof}.
     * @param hexM2 - hex representation of M2
     * @returns true if it matches the client's proof, false if it doesn't
     */
    checkServerProof(hexM2: string): boolean;

    /**
     * Returns the hex representation of the shared secret key, K
     * @returns hex representation of K
     */
    getSharedKey(): string;

    /**
     * Generate the v and salt values from values passed into init().
     * @param callback - callback has an error as the first argument, or an object containing the verifier and salt as the second.
     */
    createVerifier(callback: (error: any, result: Verifier) => any): void;

    /**
     * Returns the hex representation of the salt
     * @returns hex representation of the salt
     */
    getSalt(): string;
}

export class server {
    /** Client SRP constructor */
    constructor();

    /**
     * Initialise the server SRP and calculate needed SRP values
     * @param options - the server options including the verifier and salt
     * @param callback - called when the server instance is ready to use
     */
    init(options: ServerOptions, callback: () => any): void;

    /**
     * Returns the hex representation of the server's B value
     * @returns hex representation of B
     */
    getPublicKey(): string;

    /**
     * Returns the hex representation of the salt, as was passed into {@link init}
     * @returns hex representation of the salt
     */
    getSalt(): string;

    /**
     * Sets the client's A value on the server, and compute values to complete authentication
     * @param hexA - hex representation of A
     * @throws Will throw an error if the client provides an incorrect value
     */
    setClientPublicKey(hexA: string): void;

    /**
     * Returns the hex representation of the shared secret key, K
     * @returns hex representation of K
     */
    getSharedKey(): string;

    /**
     * Verifies the clients's M1 proof against the server's.
     * @param M1hex - hex representation of M1
     * @returns true if it matches the server's proof, false if it doesn't
     */
    checkClientProof(M1hex: string): boolean;

    /**
     * Returns the hex representation of the server's M2 proof
     * @returns hex representation of M2
     */
    getProof(): string;
}
