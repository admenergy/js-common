import { describe, expect, it } from "vitest";
import { decodeQueryString } from "./decodeQueryString";

describe("decodeQueryString", () => {
  it(`decodes a query string into an object`, () => {
    const query = "foo=bar&baz=42";
    const expected = { foo: "bar", baz: "42" };
    expect(decodeQueryString(query)).toEqual(expected);
  });

  it(`auto-trims starting "?" from query string`, () => {
    const query = "?foo=bar&baz=42";
    const expected = { foo: "bar", baz: "42" };
    expect(decodeQueryString(query)).toEqual(expected);
  });

  it(`omits empty pair values`, () => {
    const query = "foo=bar&baz=&qux=value";
    const expected = { foo: "bar", qux: "value" };
    expect(decodeQueryString(query)).toEqual(expected);
  });

  it(`returns empty object for empty string`, () => {
    expect(decodeQueryString("")).toEqual({});
  });

  it(`returns empty object for string with only "?"`, () => {
    expect(decodeQueryString("?")).toEqual({});
  });

  it(`handles URL-encoded values`, () => {
    const query = "name=John%20Doe&email=test%40example.com";
    const expected = { name: "John Doe", email: "test@example.com" };
    expect(decodeQueryString(query)).toEqual(expected);
  });

  it(`handles single key-value pair`, () => {
    const query = "foo=bar";
    const expected = { foo: "bar" };
    expect(decodeQueryString(query)).toEqual(expected);
  });

  it(`throws a TypeError if 'str' is not a string`, () => {
    const str = 42 as any; // using 'any' to allow intentional wrong type
    expect(() => decodeQueryString(str)).toThrow(TypeError);
  });

  it(`throws an Error for malformed query string with multiple "=" in a pair`, () => {
    const query = "foo=bar=baz";
    expect(() => decodeQueryString(query)).toThrow(
      "Query string is not well-formed",
    );
  });
});
