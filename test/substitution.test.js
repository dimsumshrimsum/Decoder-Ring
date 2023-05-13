const { substitution } = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should return false if the given code aplhabet isnt exactly 26 characters long", () => {
    const expected = false;
    const actual = substitution("hello", "abdsljh");
    expect(actual).to.equal(false);
  });
  it("should tranlste the phrase using the given alphabet", () => {
    const expected = "daiil";
    const actual = substitution("hello", "zebrascdfghijklmnopqtuvwxy");
    expect(actual).to.equal(expected);
  });
  it("shoudl return false if there are any duplicate characters in the alphabet", () => {
    const expected = false;
    const actual = substitution("hello", "aabcdefghijklmnopqrstuvwxy");
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in the message", () => {
    const expected = "daiil t";
    const actual = substitution("hello u", "zebrascdfghijklmnopqtuvwxy");
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "daiil t";
    const actual = substitution("Hello u", "zebrascdfghijklmnopqtuvwxy");
    expect(actual).to.equal(expected);
  });
});
