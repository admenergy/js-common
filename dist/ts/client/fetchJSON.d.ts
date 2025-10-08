export interface FetchJsonOptions {
    form?: boolean;
    headers?: {
        [key: string]: string;
    };
    signal?: AbortSignal;
}
/**
 * Fetch [GET|POST] JSON.
 * Formats a fetch call to send & accept JSON.
 * Sets the method to POST if JSON data is provided.
 *
 * @param url The URL to fetch.
 * @param data Optional JSON data to send.
 * @param options Optional fetch options.
 *
 * @returns A Promise resolving to the JSON response.
 *
 * @throws {TypeError} If the parameter types are bad.
 * @throws {UnauthorizedError} If the response status is 401.
 * @throws {AccessDeniedError} If the response status is 403.
 * @throws {Error} If the response status is not 200-299.
 * @throws {Error} If the response is not JSON.
 *
 * @example
 * const data = await fetchJSON(`/api/session/login`, { email, password });
 * -> { success: true, message: "Login successful." }
 */
export declare function fetchJSON(url: string, data?: object, options?: FetchJsonOptions): Promise<any>;
