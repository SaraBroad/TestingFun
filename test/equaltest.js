var expect = require("chai").expect;

var equality = function (x, y) {
    if (x !== y) {
        throw new Error("These numbers are unequal")
    }
    else return x === y
}

describe("Equality", function(){
    it("the two numbers should equal other", function(){
        expect(equality(2, 2)).to.be.true;
    });
    it("shoud throw error when x and y are unequal", function(){
        expect(function(){
            equality(2, 3)
        }).to.throw(Error);
    });
});
