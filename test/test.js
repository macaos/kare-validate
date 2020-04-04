"use strict";
const expect = require("chai").expect;
const KareValidate = require("../dist/index.js");
const validate = new KareValidate();

describe("getPlural function test", () => {
  it("should return Boys", () => {
    var result = validate.check(
      "test",
      {
        min: 2,
        max: 4
      },
      {
        min: "min message test",
        max: "max message test"
      }
    );
    expect(result.result).to.equal(true);
  });
  //   it("should return Girls", () => {
  //     var result = index.getPlural("Girl");
  //     expect(result).to.equal("Girls");
  //   });
  //   it("should return Geese", () => {
  //     var result = index.getPlural("Goose");
  //     expect(result).to.equal("Geese");
  //   });
  //   it("should return Toys", () => {
  //     var result = index.getPlural("Toy");
  //     expect(result).to.equal("Toys");
  //   });
  //   it("should return Men", () => {
  //     var result = index.getPlural("Man");
  //     expect(result).to.equal("Men");
  //   });
});
