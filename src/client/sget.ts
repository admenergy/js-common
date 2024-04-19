/**
 * Get from storage as JSON
 *
 * @param key - The key to retrieve.
 * @param defaultValue - The default value to return if the key is not found.
 * @param storage - The storage object to retrieve the value from, defaults to localStorage.
 *
 * @returns The JSON.parsed value for the key, or the default value if not found.
 *
 * @throws TypeError If the parameter types are bad.
 *
 * @example
 * const value = sget("foo", 42);
 * -> 42
 */
export function sget<T>(
  key: string,
  defaultValue: T,
  storage: Storage = localStorage,
): T {
  if (!(storage instanceof Storage)) {
    throw new TypeError(
      `sget(key, defaultValue, storage) : 'storage' must be a Storage object.`,
    );
  }

  if (typeof key !== "string") {
    throw new TypeError(
      `sget(key, defaultValue, storage) : 'key' must be a string.`,
    );
  }

  const stored = storage.getItem(key);
  if (stored === null) return defaultValue;
  return JSON.parse(stored) as T;
}
