export type ObjectPath = any[];

export function getIn<T>(object: T, path: ObjectPath, defaultValue?: any): any {
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
