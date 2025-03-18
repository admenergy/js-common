import { describe, expect, it } from "vitest";
import { sanitizeJSON } from "./sanitizeJSON";

describe("sanitizeJSON", () => {
  it("should handle basic primitives", () => {
    expect(sanitizeJSON(42)).toBe(42);
    expect(sanitizeJSON("test")).toBe("test");
    expect(sanitizeJSON(true)).toBe(true);
    expect(sanitizeJSON(null)).toBe(null);
    expect(sanitizeJSON(undefined)).toBe(undefined);
  });

  it("should convert Date to ISO string", () => {
    const date = new Date("2024-03-14T12:00:00Z");
    expect(sanitizeJSON(date)).toBe("2024-03-14T12:00:00.000Z");
  });

  it("should convert Set to array", () => {
    const set = new Set([1, "two", true]);
    expect(sanitizeJSON(set)).toEqual([1, "two", true]);
  });

  it("should convert Map to object (skipping non-stringable keys)", () => {
    const map = new Map<
      string | number | boolean | symbol | object | (() => void),
      any
    >([
      ["a", 1], // string key
      [42, "number"], // number key
      [true, "boolean"], // boolean key
      [Symbol("xyz"), "sym"], // symbol key - should keep description
      [Symbol(), "skip"], // empty symbol - should skip
      [{}, "skip"], // object key - should skip
      [() => {}, "skip"], // function key - should skip
    ]);
    expect(sanitizeJSON(map)).toEqual({
      a: 1,
      42: "number",
      true: "boolean",
      xyz: "sym",
    });
  });
});
