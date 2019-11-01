import _ from "lodash"

type predicateFn = (value: any, key: any) => any

/**
 * Recursively filter out an object.
 * @param obj The object or array to filter.
 * @param predicate The predicate to compare the items to.
 * @example
 * ```
 * const recursiveFilter = require("recursive-filter");
 *
 * recursiveFilter(
 *     {
 *         a: 1,
 *         b: 2,
 *         c: 3
 *     },
 *     (value, key) => key === "a" || value === 2
 * );
 * //=> { a: 1, b: 2 }
 * ```
*/
declare function recursiveFilter<T extends object | any[]>(obj: T, predicate?: predicateFn): Partial<T>;
declare function recursiveFilter<T>(obj: T, predicate?: predicateFn): T;

export = recursiveFilter;
