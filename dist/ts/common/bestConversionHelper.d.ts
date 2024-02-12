export interface Conversion {
    unit: string;
    value: number;
}
export declare class ConversionResult {
    value: number;
    round: number;
    unit: string;
    constructor(value: number, round: number, unit: string);
}
/**
 * Best Conversion Helper
 *
 * Helper to convert to human readable units
 *
 * @param startingNumber - Value to convert.
 * @param threshold - Multiplier before converting to the next unit (recommended: 1.2).
 * @param conversions - Array of conversions.
 * @param startingConversionsIndex - Which index in `conversions` represents `startingNumber`.
 *
 * @returns The best conversion in the conversion table.
 *
 * @throws TypeError if the parameter types are bad.
 *
 * @example
 * See bestByteUnit.js and bestTimeUnitMS.js
 */
export declare function bestConversionHelper(startingNumber: number, threshold: number, conversions: Conversion[], startingConversionsIndex: number): Conversion;
