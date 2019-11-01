import test from "ava"
import recursiveFilter from "."

test("main", (t) => {
    t.deepEqual(recursiveFilter({
        "_a": 1,
        "b": "c",
        "c": {
            a: 1,
            _b: "c",
        },
        "d": ["a", 1, {
            a: 1,
            _b: "c",
        }],
    }, (_value, key) => !key.startsWith("_")), { b: "c", c: { a: 1 }, d: ["a", 1, { a: 1 }] })
    recursiveFilter(["a"])
})
