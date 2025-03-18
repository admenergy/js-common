/**
 * Checks if a given string looks like a valid ISO date string.
 *
 * @param str - The string to be checked.
 * @returns Looks like an ISO date string.
 *
 * @example
 * if (isISODateString("2020-01-01T00:00:00.000Z"))
 */
export function isISODateString(str: string): boolean {
  // JavaScript regex for ISO datetime: https://stackoverflow.com/a/3143231/1258524
  return /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/.test(
    str,
  );
}
