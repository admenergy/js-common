export type ObjectPath = (string | number)[];
export declare function getIn<T>(object: T, path: ObjectPath, defaultValue?: unknown): unknown;
