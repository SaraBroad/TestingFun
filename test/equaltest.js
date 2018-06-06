var expect = require("chai").expect;

var equality = function (x, y) {
    if (x !== y) {
        throw new Error("These numbers are unequal")
    }
    else return x === y
}