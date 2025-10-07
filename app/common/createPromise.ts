import { bestTimeUnitMS } from "~/common/bestTimeUnitMS";

interface CreatePromiseParams {
  timeout?: number | Date;
}

/**
 * Promise Helper
 *
 * Returns an object with an unresolved promise, resolve(), & reject() exposed to you. Suitable for non-promise code, like FileReader.
 *
 * @returns An object with properties: promise, a Promise<any> that can be awaited; resolve, a function to resolve the promise; and reject, a function to reject the promise.
 *
 * @example
 * const pr = createPromise();
 * const reader = new FileReader();
 * reader.addEventListener("loadend", pr.resolve);
 * reader.readAsArrayBuffer(file);
 * await pr.promise;
 * return stuff;
 */
export function createPromise<T = any>({ timeout }: CreatePromiseParams = {}): {
  promise: Promise<T>;
  resolve: (value: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;
} {
  let resolve: (value: T | PromiseLike<T>) => void;
  let reject: (reason?: any) => void;
  let timeoutId: NodeJS.Timeout | undefined;

  const promise = new Promise<T>((rs, rj) => {
    resolve = (value: T | PromiseLike<T>) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      rs(value);
    };
    reject = (reason?: any) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      rj(reason);
    };
  });

  if (timeout) {
    let timeoutValue: number;

    if (typeof timeout === "number") {
      timeoutValue = timeout;
    } else {
      timeoutValue = new Date(timeout).getTime() - Date.now();
    }

    const t = bestTimeUnitMS(timeoutValue);
    const error = new Error(`Promise timed out after ${t.round} ${t.unit}.`);

    timeoutId = setTimeout(() => {
      reject(error);
    }, timeoutValue);
  }

  return {
    promise,
    resolve,
    reject,
  };
}
