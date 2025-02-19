import { createPromise } from "~/common/createPromise";

type FinishedPromise = {
  callback: () => Promise<void>;
  promise: ReturnType<typeof createPromise<void>>;
};

export class Limiter {
  private isRunning: boolean;
  private limit: number;
  private running: TrackablePromise[];
  private queue: FinishedPromise[];

  constructor(limit: number) {
    this.isRunning = false;
    this.limit = limit;
    this.queue = [];
    this.running = [];
  }

  async waitForSlot() {
    if (this.running.length < this.limit) return;

    const promises = this.running.map((p) => p.promise);

    await Promise.any(promises);

    this.running = this.running.filter((p) => !p.isDone);
  }

  async run(callback: () => Promise<void>) {
    if (this.running.length < this.limit) {
      const promise = callback();
      const tr = new TrackablePromise(promise);
      this.running.push(tr);
      await promise;
    } else {
      const finishedPromise: FinishedPromise = {
        callback,
        promise: createPromise<void>(),
      };

      this.queue.push(finishedPromise);

      this.processQueue();

      await finishedPromise.promise.promise;
    }
  }

  private async processQueue() {
    if (this.isRunning) return;

    this.isRunning = true;

    while (this.queue.length) {
      const finishedPromise = this.queue.shift();

      await this.waitForSlot();

      const promise = finishedPromise.callback();
      const tr = new TrackablePromise(promise);
      this.running.push(tr);

      promise.then(() => {
        finishedPromise.promise.resolve();
      });
    }

    this.isRunning = false;
  }
}

class TrackablePromise {
  public isDone: boolean;
  public isResolved: boolean;
  public isRejected: boolean;

  private pr: ReturnType<typeof createPromise<void>>;

  constructor(promise: Promise<void>) {
    this.pr = createPromise<void>();

    promise.then((value) => {
      this.isResolved = true;
      this.isDone = true;
      this.pr.resolve(value);
    });

    promise.catch((error) => {
      this.isRejected = true;
      this.isDone = true;
      this.pr.reject(error);
    });
  }

  public get promise() {
    return this.pr.promise;
  }
}
