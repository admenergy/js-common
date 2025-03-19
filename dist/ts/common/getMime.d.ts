/**
 * Returns the MIME type of a file based on its extension.
 *
 * @param fileName - The name of the file.
 * @returns The MIME type of the file.
 * @throws TypeError if the parameter types are bad.
 *
 * @example
 * const mime = getMime("Gachi.mp3");
 * -> "audio/mpeg"
 */
export declare function getMime(fileName: string): string;
