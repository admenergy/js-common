/**
 * Unauthorized Error
 *
 * A request did not provide the required authentication.
 *
 * @extends Error
 */
export declare class UnauthorizedError extends Error {
    /**
     * Create an UnauthorizedError.
     *
     * @param {string} [message] - The error message. Pass a message to override the default.
     */
    constructor(message?: any);
}
/**
 * Access Denied Error
 *
 * The authenticated user does not have permissions for the request.
 *
 * @extends Error
 */
export declare class AccessDeniedError extends Error {
    /**
     * Create an AccessDeniedError.
     *
     * @param {string} [message] - The error message. Pass a message to override the default.
     */
    constructor(message?: any);
}
