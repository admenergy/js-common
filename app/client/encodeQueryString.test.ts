import { describe, expect, it } from "vitest";
import { encodeQueryString } from "./encodeQueryString";

describe("encodeQueryString", () => {
  it(`encodes an object into a query string`, () => {
    const data = { foo: "bar", baz: 42 };
    const expected = "foo=bar&baz=42";
    expect(encodeQueryString(data)).toEqual(expected);
  });

  it(`appends query string to URL if provided`, () => {
    const data = { foo: "bar", baz: 42 };
    const url = "https://example.com";
    const expected = "https://example.com?foo=bar&baz=42";
    expect(encodeQueryString(data, url)).toEqual(expected);
  });

  it(`throws a TypeError if 'data' is not an object`, () => {
    const data = "not an object" as any; // using 'any' to allow intentional wrong type
    expect(() => encodeQueryString(data)).toThrow(TypeError);
  });

  it(`throws a TypeError if 'url' is provided but not a string`, () => {
    const data = { foo: "bar" };
    const url = 42 as any; // using 'any' to allow intentional wrong type
    expect(() => encodeQueryString(data, url)).toThrow(TypeError);
  });
});
