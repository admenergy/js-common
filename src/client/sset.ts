/**
 * Set to Storage as JSON
 *
 * @param key - The key to set.
 * @param value - The value to set. Will be stringified as JSON.
 * @param storage - The storage object to set the value in, defaults to localStorage.
 *
 * @returns The value that was set.
 *
 * @throws TypeError If the parameter types are bad.
 *
 * @example
 * const value = sset("foo", 42);
 * -> 42
 */
export function sset<T>(
  key: string,
  value: T,
  storage: Storage = localStorage,
): T {
  if (!(storage instanceof Storage)) {
    throw new TypeError(
      `sset(key, value, storage) : 'storage' must be a Storage object.`,
    );
  }

  if (typeof key !== "string") {
    throw new TypeError(`sset(key, value, storage) : 'key' must be a string.`);
  }

  storage.setItem(key, JSON.stringify(value));
  return value;
}
