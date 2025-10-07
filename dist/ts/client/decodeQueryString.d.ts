/**
 * Decodes a query string into an object. Starting "?" are auto-trimmed. Empty pair values are omitted.
 *
 * @param str - The query string to decode.
 *
 * @returns An object containing key-value pairs from the query string.
 *
 * @throws {TypeError} If the parameter types are bad.
 *
 * @example
 * const query = decodeQueryString("?foo=bar");
 * -> { foo: "bar" }
 */
export declare function decodeQueryString(str: string): Record<string, string>;
