interface PerformanceNames {
  [key: string]: boolean;
}

const performanceNames: PerformanceNames = {};

/**
 * Measures the performance of a given function or promise and logs the time taken to execute it.
 *
 * @param name - The name of the performance measurement.
 * @param fn - The function or promise to measure the performance of.
 * @returns A promise that resolves when the performance measurement is complete.
 * @throws TypeError If the name parameter is not a string or if the fn parameter is not a function or promise.
 *
 * @example
 * await performance("dosomething", async () => {
 *    // Do something.
 * });
 * -> dosomething: 0.0400390625 ms
 */
export async function performance(
  name: string,
  fn: (() => void) | (() => Promise<void>),
): Promise<void> {
  if (typeof name !== "string") {
    throw new TypeError(`performance(name, fn) : 'name' must be a string.`);
  }

  if (!(typeof fn === "function")) {
    throw new TypeError(
      `performance(name, fn) : 'fn' must be a function or a function returning a promise.`,
    );
  }

  let n = name;
  let count = 1;
  while (n in performanceNames) {
    n = `${name} ${count++}`;
  }
  performanceNames[n] = true;

  console.time(n);
  try {
    await fn();
  } finally {
    console.timeEnd(n);
    delete performanceNames[n];
  }
}
