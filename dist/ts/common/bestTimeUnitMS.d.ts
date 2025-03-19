import { ConversionResult } from "./bestConversionHelper";
/**
 * Convert a millisecond number to human readable units.
 *
 * @param ms - Value to convert.
 *
 * @returns An instance of ConversionResult with value, round, unit, and a toString method that flattens the output.
 *
 * @throws TypeError if the parameter types are incorrect.
 *
 * @example
 * bestTimeUnitMS(4500000);
 * console.log(result.toString());
 * -> "1.25 h"
 */
export declare function bestTimeUnitMS(ms: number): ConversionResult;
