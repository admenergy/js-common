interface RunProcessResult {
    log: string;
    stdout: string;
    stderr: string;
}
/**
 * Runs a script with parameters.
 *
 * @param script - The path to the script to run.
 * @param params - An array of parameters to pass to the script.
 *
 * @returns Resolves to an object containing the output of the script.
 *
 * @throws TypeError if the parameter types are incorrect.
 *
 * @example
 * const { log, stdout, stderr } = await runProcess("ls", ["-1", "~/"]);
 */
export declare function runProcess(script: string, params?: string[]): Promise<RunProcessResult>;
export {};
