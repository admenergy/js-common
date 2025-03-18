/**
 * Sanitize Path
 *
 * Paths are only allowed to contain:
 *     spaces
 *     a-z
 *     A-Z
 *     0-9
 *     _
 *     ,
 *     .
 *     -
 *
 * @param workingDir - The working directory to resolve paths from.
 * @param filePath - The relative path to sanitize.
 *
 * @returns The resolved path.
 *
 * @throws TypeError if the parameter types are incorrect.
 * @throws Error if the path is outside the working directory.
 *
 * @example
 * const safePath = sanitizePath("/var/data", "Foo̵̔̐Bã̸r?.txt");
 * -> "/var/data/FooBar.txt"
 */
export declare function sanitizePath(workingDir: string, filePath: string): string;
