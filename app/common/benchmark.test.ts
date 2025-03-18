import { describe, expect, it } from "vitest";
import { benchmark } from "./benchmark";

describe("benchmark function", () => {
  it(`should return a string`, async () => {
    const result = await benchmark(() => {}, 1);
    expect(typeof result).toBe("string");
  });

  it(`should throw error if first argument is not a function`, async () => {
    await expect(benchmark("not a function" as any, 1)).rejects.toThrow(
      TypeError,
    );
  });

  it(`should throw error if second argument is not a number`, async () => {
    await expect(benchmark(() => {}, "not a number" as any)).rejects.toThrow(
      TypeError,
    );
  });

  it(`should throw error if second argument is less than 1`, async () => {
    await expect(benchmark(() => {}, 0)).rejects.toThrow(TypeError);
  });
});
