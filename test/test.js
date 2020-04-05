"use strict";
const expect = require("chai").expect;
const index = require("../dist/index.js");
const validate = new index.KareValidate();

describe("kare validate test", () => {
  it("macao : min2, max5 = true", () => {
    var result = validate.check(
      "macao",
      {
        min: 2,
        max: 5
      },
      {
        min: "min message test",
        max: "max message test"
      }
    );
    expect(result.result).to.equal(true);
  });

  it("macao : min2, max4 = false", () => {
    var result = validate.check(
      "macao",
      {
        min: 2,
        max: 4
      },
      {
        min: "min message test",
        max: "max message test"
      }
    );
    expect(result.result).to.equal(false);
  });

  it("mac : min4, max5 = false", () => {
    var result = validate.check(
      "test234",
      {
        min: 4,
        max: 5
      },
      {
        min: "min message test",
        max: "max message test"
      }
    );
    expect(result.result).to.equal(false);
  });
});
