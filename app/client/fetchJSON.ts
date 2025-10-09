import { merge } from "lodash";
import { AccessDeniedError, UnauthorizedError } from "../ErrorTypes";

export interface FetchJsonOptions {
  form?: boolean;
  headers?: { [key: string]: string };
  signal?: AbortSignal;
}

/**
 * Fetch [GET|POST] JSON.
 * Formats a fetch call to send & accept JSON.
 * Sets the method to POST if JSON data is provided.
 *
 * @param url The URL to fetch.
 * @param data Optional JSON data to send.
 * @param options Optional fetch options.
 *
 * @returns A Promise resolving to the JSON response.
 *
 * @throws {TypeError} If the parameter types are bad.
 * @throws {UnauthorizedError} If the response status is 401.
 * @throws {AccessDeniedError} If the response status is 403.
 * @throws {Error} If the response status is not 200-299.
 * @throws {Error} If the response is not JSON.
 *
 * @example
 * const data = await fetchJSON(`/api/session/login`, { email, password });
 * -> { success: true, message: "Login successful." }
 */
export async function fetchJSON(
  url: string,
  data?: object,
  options: FetchJsonOptions = {},
): Promise<any> {
  if (typeof url !== "string") {
    throw new TypeError(
      `fetchJSON(url, data?, options?) : 'url' must be a string.`,
    );
  }
  if (data !== undefined && (typeof data !== "object" || data === null)) {
    throw new TypeError(
      `fetchJSON(url, data?, options?) : 'data' is optional, but must be an object.`,
    );
  }
  if (
    options !== undefined &&
    (typeof options !== "object" || options === null)
  ) {
    throw new TypeError(
      `fetchJSON(url, data?, options?) : 'options' is optional, but must be an object.`,
    );
  }

  const asForm = !!options.form;

  let fetchData;

  if (asForm) {
    fetchData = merge(
      {
        method: "post",
      },
      options,
    );
  } else {
    fetchData = merge(
      {
        method: typeof data === "undefined" ? "get" : "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      },
      options,
    );
  }

  if (asForm && data) {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof FileList || Array.isArray(value)) {
        for (const v of value) formData.append(key, v);
      } else {
        formData.append(key, value);
      }
    });

    fetchData.body = formData;
  } else {
    if (data !== undefined) {
      fetchData.body = JSON.stringify(data);
    }
  }

  const res = await fetch(url, fetchData);

  let json;
  try {
    json = await res.clone().json();
  } catch (error) {
    return res.text().then((unexpectedText) => {
      if (res.status === 401) {
        throw new UnauthorizedError(unexpectedText);
      }

      if (res.status === 403) {
        throw new AccessDeniedError(unexpectedText);
      }

      console.error(error);
      throw new Error(
        `[${res.status}] Unexpected non-json response: ` + unexpectedText,
      );
    });
  }

  if (200 <= res.status && res.status < 300) {
    return json;
  } else {
    if (res.status === 401) {
      console.log("🐙 fetchJSON 401", json.message);
      throw new UnauthorizedError(json.message);
    }
    if (res.status === 403) {
      console.log("🐙 fetchJSON 403", json.message);
      throw new AccessDeniedError(json.message);
    }

    console.log("🐙 fetchJSON error", json.message);
    throw new Error(json.message ?? JSON.stringify(json));
  }
}
