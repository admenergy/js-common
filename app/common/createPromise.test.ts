import { describe, expect, it } from "vitest";
import { createPromise } from "./createPromise";

describe("createPromise", () => {
  it(`should return an object with promise, resolve, and reject`, () => {
    const pr = createPromise();
    expect(pr).toHaveProperty("promise");
    expect(pr).toHaveProperty("resolve");
    expect(pr).toHaveProperty("reject");
    expect(pr.promise).toBeInstanceOf(Promise);
    expect(pr.resolve).toBeInstanceOf(Function);
    expect(pr.reject).toBeInstanceOf(Function);
  });

  it(`should resolve promise when resolve function is called`, async () => {
    const pr = createPromise<string>();
    const testValue = "test";
    pr.resolve(testValue);
    await expect(pr.promise).resolves.toBe(testValue);
  });

  it(`should reject promise when reject function is called`, async () => {
    const pr = createPromise();
    const testError = new Error("test");
    pr.reject(testError);
    await expect(pr.promise).rejects.toThrow(testError);
  });

  it(`should timeout promise after specified milliseconds`, async () => {
    const pr = createPromise({ timeout: 1000 });
    await expect(pr.promise).rejects.toThrow(
      "Promise timed out after 1000 ms.",
    );
  }, 2000);

  it(`should timeout promise after specified Date`, async () => {
    const futureDate = new Date(Date.now() + 1100);
    const pr = createPromise({ timeout: futureDate });
    await expect(pr.promise).rejects.toThrow(
      "Promise timed out after 1000 ms.",
    );
  }, 2000);

  it(`should not timeout if promise resolves before timeout`, async () => {
    const pr = createPromise<string>({ timeout: 100 });
    const testValue = "resolved before timeout";

    // Resolve immediately
    pr.resolve(testValue);

    await expect(pr.promise).resolves.toBe(testValue);
  });

  it(`should not timeout if promise rejects before timeout`, async () => {
    const pr = createPromise({ timeout: 1000 });
    const testError = new Error("rejected before timeout");

    // Reject immediately
    pr.reject(testError);

    await expect(pr.promise).rejects.toThrow(testError);
  });
});
