"use strict"

const _ = require("lodash")

module.exports = function recursiveFilter(obj, predicate = _.identity) {
    if (_.isArray(obj)) return _.map(obj, (val) => recursiveFilter(val, predicate))
    else if (_.isPlainObject(obj)) return _.mapValues(_.pickBy(obj, predicate), (val) => recursiveFilter(val, predicate))
    return obj
}
