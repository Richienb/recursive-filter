# Recursive filter [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/recursive-filter/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/recursive-filter)

Recursively filter an object or array.

[![NPM Badge](https://nodei.co/npm/recursive-filter.png)](https://npmjs.com/package/recursive-filter)

## Install

```sh
npm install recursive-filter
```

## Usage

```js
const recursiveFilter = require("recursive-filter");

recursiveFilter(
    {
        a: 1,
        b: 2,
        c: 3
    },
    (value, key) => key === "a" || value === 2
);
//=> { a: 1, b: 2 }
```

## API

### recursiveFilter(obj, predicate)

#### obj

Type: `object or array`

The object or array to filter.

#### predicate

Type: `(value, key) => boolean-convertable`

The predicate to compare the items to.
