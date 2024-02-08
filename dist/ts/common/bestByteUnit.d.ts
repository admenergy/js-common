import { ConversionResult } from "./bestConversionHelper";
/**
 * Convert a byte number to human readable units.
 *
 * @param byte - Value to convert.
 *
 * @returns An instance of ConversionResult with value, round, unit, and a toString method that flattens the output.
 *
 * @throws TypeError if the parameter types are incorrect.
 *
 * @example
 * const result = bestByteUnit(2000000);
 * console.log(result.toString());
 * -> "1.91 MB"
 */
export declare function bestByteUnit(byte: number): ConversionResult;
