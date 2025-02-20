export declare class Limiter {
    private isRunning;
    private limit;
    private running;
    private queue;
    constructor(limit: number);
    waitForSlot(): Promise<void>;
    run(callback: () => Promise<void>): Promise<void>;
    private processQueue;
}
