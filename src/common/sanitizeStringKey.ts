import { sanitizeStringDisplay } from "~/common";

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
export function sanitizeStringKey(str: string): string {
  // Demote diacritic characters, like: é -> e
  str = sanitizeStringDisplay(str);

  // Replace symbols with "|"
  str = str.replace(/[^a-zA-Z0-9]+/g, "|");

  // Trim begin and end of string
  str = str.replace(/^\|+|\|+$/g, "");

  // Split for map with camelCase()
  str = str.split("|").map(camelCase).join("");

  // Lower first character
  str = str[0].toLowerCase() + str.slice(1);

  return str;
}

function camelCase(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
}
