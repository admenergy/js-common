/**
 * Get environment variable and parse it if applicable.
 * If ends in ".json5", it will be parsed as JSON5.
 *
 * @param variableName - Name of the environment variable. Case sensitive.
 * @returns The parsed environment variable, or null if not found or on parsing errors.
 *
 * @throws TypeError if the parameter types are bad.
 *
 * @example
 * const config = getEnv("CONFIG");
 * -> "Test value"
 *
 * @example
 * const config = getEnv("config.json5");
 * -> { foo: "Test value" }
 */
export declare function getEnv<T = any>(variableName: string): T | null;
