const { polybius } = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should translate the letters i and j to 42", () => {
    const expected = "42543352";
    const actual = polybius("junk");
    expect(actual).to.equal(expected);
  });
  it("should translate 42 to i/j when decoding", () => {
    const actual = polybius("42543352", false);

    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });
  it("should ignore capital letters", () => {
    const expected = "3251131343";
    const actual = polybius("Hello");
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in the message", () => {
    const expected = "325145 54";
    const actual = polybius("hey u");
    expect(actual).to.equal(expected);
  });
});
