const expect = require("chai").expect;
const sampleData1 = require("../index").example1;
const sampleData2 = require("../index").example2;
const sampleData3 = require("../index").example3;
const sampleData4 = require("../index").example4;
const getMedian = require("../index").getMedian;
const isOdd = require("../index").isOdd;

describe("isOdd", () => {

  it("should be a function", () => {
    expect(isOdd).to.be.a("function");
  })

  it("should return true for odd numbers", () => {
    expect(isOdd(11)).to.be.true;
  })

  it("should return false for even numbers", () => {
    expect(isOdd(4)).to.be.false;
  })

})

describe("getMedian", () => {

  it("should return a number", () => {
    expect(getMedian(sampleData1)).to.be.a('number');
  })

  it("should return 3 for [1,2,3,4,5]", () => {
    expect(getMedian(sampleData1)).to.equal(3);
  })

  it("should return 3 for [3,1,2,5,3]", () => {
    expect(getMedian(sampleData2)).to.equal(3);
  })

  it("should return 2 for [1,300,2,200,1]", () => {
    expect(getMedian(sampleData3)).to.equal(2);
  })

  it("should return 12.5 for [3,6,20,99,10,15]", () => {
    expect(getMedian(sampleData4)).to.equal(12.5);
  })

})
