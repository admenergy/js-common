import { fetchJSON } from "~/client";
import { AccessDeniedError, UnauthorizedError } from "~/ErrorTypes";

describe("fetchJSON", () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it(`should return a JSON object`, async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        clone: function () {
          return this;
        },
        json: () => Promise.resolve({ foo: 42 }),
        text: () => Promise.resolve("Error"),
      }),
    );

    const data = await fetchJSON("/test/url");
    expect(data).toEqual({ foo: 42 });
  });

  it(`should throw an error if url is not a string`, async () => {
    await expect(fetchJSON(123)).rejects.toThrow(TypeError);
  });

  it(`should throw an error if data is not an object`, async () => {
    await expect(fetchJSON("/test/url", "string")).rejects.toThrow(TypeError);
  });

  it(`should throw an error if options is not an object`, async () => {
    await expect(fetchJSON("/test/url", {}, "string")).rejects.toThrow(
      TypeError,
    );
  });

  it(`should throw UnauthorizedError if status is 401`, async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 401,
        clone: function () {
          return this;
        },
        json: () => Promise.resolve({ message: "Unauthorized" }),
        text: () => Promise.resolve("Unauthorized"),
      }),
    );

    await expect(fetchJSON("/test/url")).rejects.toThrow(UnauthorizedError);
  });

  it(`should throw AccessDeniedError if status is 403`, async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 403,
        clone: function () {
          return this;
        },
        json: () => Promise.resolve({ message: "Access Denied" }),
        text: () => Promise.resolve("Access Denied"),
      }),
    );

    await expect(fetchJSON("/test/url")).rejects.toThrow(AccessDeniedError);
  });
});
