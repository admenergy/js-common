import { removeDiacritics } from "~/common";

/**
 * Sanitize String Display
 *
 * Removes unicode and most symbols from a string for data sanity.
 *
 * @param str The string to sanitize
 *
 * @returns The sanitized string
 *
 * @example
 * console.log(sanitizeStringDisplay("   Héllö  “Wörld”!\t\t\t");
 * -> 'Hello  "World"!'
 */
export function sanitizeStringDisplay(str: string): string {
  // Demote diacritic characters, like: é -> e
  str = removeDiacritics(str);

  // Remove uncommon symbols
  str = str.replace(/[^a-zA-Z0-9 \\/()[\]{}<>\-_+="';:,.?!@#$%^&*]+/g, "");

  // Trim begin and end of string
  str = str.trim();

  return str;
}
