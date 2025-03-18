import type { AppLoadContext, EntryContext } from "@remix-run/node";
export default function handleRequest(request: Request, responseStatusCode: number, responseHeaders: Headers, remixContext: EntryContext, loadContext: AppLoadContext): Promise<unknown>;
