/**
 * Remove Diacritics
 *
 * Removes diacritics and other symbols, like Microsoft Smart Quotes.
 * For old JS compatibility, this function does not throw errors. It just returns the input if it's not a string.
 *
 * @param str The string to remove diacritics from
 *
 * @returns The string without diacritics
 *
 * @example
 * console.log(removeDiacritics("Héllö Wörld"));
 * -> "Hello World"
 */
export declare function removeDiacritics(str: string): string;
