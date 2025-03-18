/**
 * Sanitize String Key
 *
 * Removes all unicode and symbols from a string for use as a key.
 * It also camelCases the string.
 *
 * @param str The string to sanitize
 *
 * @returns The sanitized string
 *
 * @example
 * console.log(sanitizeStringKey("   Héllö  “Wörld”!\t\t\t");
 * -> 'helloWorld'
 */
export declare function sanitizeStringKey(str: string): string;
