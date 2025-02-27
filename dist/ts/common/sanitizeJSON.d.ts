/**
 * Creates a safe copy of a JSON-like object:
 * - No prototype chain (prevents prototype pollution)
 * - Removes dangerous keys (__proto__, constructor, prototype)
 * - No circular references
 * - Converts special objects to JSON-compatible formats:
 *   - Dates -> ISO strings
 *   - Sets -> Arrays
 *   - Maps -> Objects
 *
 * @param {*} obj - Any JavaScript value to sanitize
 * @param {Object} [options] - Optional configuration
 * @param {WeakMap<Object,boolean>} [options.seen=new WeakMap()] - WeakMap of seen objects to prevent circular refs
 * @returns {*} A clean copy safe for JSON operations and database queries
 * @throws {Error} If circular reference is detected
 */
interface SanitizeOptions {
    seen?: WeakSet<object>;
}
type JsonPrimitive = string | number | boolean | null;
type JsonArray = JsonValue[];
type JsonObject = {
    [key: string]: JsonValue;
};
type JsonValue = JsonPrimitive | JsonObject | JsonArray;
export declare function sanitizeJSON<T, R extends JsonValue = JsonValue>(obj: T, options?: SanitizeOptions): R;
export {};
