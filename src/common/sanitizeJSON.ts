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
type JsonObject = { [key: string]: JsonValue };
type JsonValue = JsonPrimitive | JsonObject | JsonArray;

export function sanitizeJSON<T, R extends JsonValue = JsonValue>(
  obj: T,
  options: SanitizeOptions = {},
): R {
  const { seen = new WeakSet() } = options;

  // Handle null/undefined
  if (obj === null || obj === undefined) {
    return obj as unknown as R;
  }

  // Handle primitives
  if (typeof obj !== "object") {
    return obj as unknown as R;
  }

  // Handle special objects
  if (obj instanceof Date) {
    return obj.toISOString() as R;
  }

  if (obj instanceof Set) {
    return Array.from(obj).map((item) => sanitizeJSON(item, { seen })) as R;
  }

  if (obj instanceof Map) {
    const cleanObj = Object.create(null);
    for (const [key, value] of obj.entries()) {
      // Handle different key types
      if (typeof key === "symbol") {
        const regexSymbolLabel = /^Symbol\((.*)\)$/;
        const desc = key.toString().match(regexSymbolLabel)?.[1];
        if (desc) {
          cleanObj[desc] = sanitizeJSON(value, { seen });
        }
      } else if (typeof key !== "object" && typeof key !== "function") {
        // Handle other primitive types
        cleanObj[String(key)] = sanitizeJSON(value, { seen });
      }
      // Skip objects and functions
    }
    return cleanObj as R;
  }

  // Detect circular references (only check objects)
  if (seen.has(obj)) {
    throw new Error("Circular reference detected");
  }
  seen.add(obj);

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeJSON(item, { seen })) as R;
  }

  // Handle objects
  const cleanObj = Object.create(null);
  for (const key of Object.keys(obj)) {
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      continue;
    }

    try {
      cleanObj[key] = sanitizeJSON(obj[key], { seen });
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`Failed to sanitize property "${key}":`, error);
      }
      continue;
    }
  }

  return cleanObj as R;
}
