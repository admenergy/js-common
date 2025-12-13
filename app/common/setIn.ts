import { type ObjectPath } from "./getIn";

export function setIn<T>(source: T, path: ObjectPath, value: any): T {
  if (typeof source === "undefined") {
    throw new TypeError(`Can't use setIn on undefined.`);
  }
  if (source === null) {
    throw new TypeError(`Can't use setIn on null.`);
  }
  if (typeof source !== "object") {
    throw new TypeError(`setIn doesn't operate on ${typeof source}.`);
  }

  if (path.length === 0) {
    throw new TypeError(`Can't use setIn to replace the root.`);
  }

  return traverse(source, path, value).node;
  function traverse(
    source: any,
    path: ObjectPath,
    value: any,
  ): { node: any; changed: boolean } {
    const [p, ...pathRest] = path;
    if (pathRest.length === 0) {
      if (source[String(p)] === value) {
        return {
          node: source,
          changed: false,
        };
      } else {
        let ret;
        if (source) {
          ret = Array.isArray(source) ? [...source] : { ...source };
        } else {
          ret = Number.isInteger(Number(p)) ? [] : {};
        }

        if (typeof value === "undefined") {
          if (Array.isArray(ret) && Number.isInteger(Number(p))) {
            ret.splice(Number(p), 1);
          } else {
            delete ret[String(p)];
          }
        } else {
          ret[String(p)] = value;
        }

        return {
          node: ret,
          changed: true,
        };
      }
    } else {
      if (
        typeof source[String(p)] === "undefined" ||
        source[String(p)] === null
      ) {
        const np = pathRest[0];
        const temp = Number.isInteger(Number(np)) ? [] : {};
        const { node, changed } = traverse(temp, pathRest, value);
        let newsource;
        if (source) {
          newsource = Array.isArray(source) ? [...source] : { ...source };
        } else {
          newsource = Number.isInteger(Number(np))
            ? [...source]
            : { ...source };
        }
        newsource[String(p)] = node;
        return {
          node: newsource,
          changed,
        };
      } else {
        const { node, changed } = traverse(source[String(p)], pathRest, value);
        if (changed) {
          const ret = Array.isArray(source) ? [...source] : { ...source };
          ret[String(p)] = node;
          return {
            node: ret,
            changed: true,
          };
        } else {
          return {
            node: source,
            changed,
          };
        }
      }
    }
  }
}
