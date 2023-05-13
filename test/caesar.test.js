const { caesar } = require("../src/caesar.js");
const expect = require("chai").expect;
describe("caesar", () => {
  describe("ceasar checking for valid shift value", () => {
    it("should return false if shift is greater than 25", () => {
      const expected = false;
      const actual = caesar("abcde", 100);
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift is 0", () => {
      const expected = false;
      const actual = caesar("abcd", 0);
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is less than -25", () => {
      const expected = false;
      const actual = caesar("abcd", -100);
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is not present", () => {
      const expected = false;
      const actual = caesar("abcd");
      expect(actual).to.equal(expected);
    });
  });
  describe("caesar encoding a message", () => {
    it("should encode a message using the ceaser cipher according to the shift value", () => {
      const expected = "olssv";
      const actual = caesar("hello", 7);
      expect(actual).to.equal(expected);
    });
    it("should preserve spaces and symbols", () => {
      const expected = "olssv aolyl!";
      const actual = caesar("hello there!", 7);
      expect(actual).to.equal(expected);
    });
    it("should wrap around if the shift exceeds the length of the alphabet", () => {
      const expected = "ghjo";
      const actual = caesar("zach", 7);
      expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift", () => {
      const expected = "axeeh";
      const actual = caesar("hello", -7);
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const expected = "axeeh";
      const actual = caesar("Hello", -7);
      expect(actual).to.equal(expected);
    });
  });
  describe("caesar decoding a message", () => {
    it("should decode a message maintaining spaces and symbols", () => {
      const expected = "hello there!";
      const actual = caesar("axeeh maxkx!", -7, false);
      expect(actual).to.equal(expected);
    });
  });
});
