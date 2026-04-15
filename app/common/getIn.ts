export type ObjectPath = (string | number)[];

export function getIn<T>(object: T, path: ObjectPath, defaultValue?: unknown): unknown {
  for (const p of path) {
    if (object === null) {
      object = undefined;
      break;
    }

    const v = object[String(p)];
    if (typeof v === "undefined") {
      object = undefined;
      break;
    }
    object = v;
  }

  if (typeof object === "undefined") return defaultValue;
  return object;
}
