// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function shiftCheck(shift) {
    //receives a shift value and returns truthy based on set of conditions
    return shift && shift != 0 && shift > -25 && shift < 25;
  }

  function caesar(input, shift, encode = true) {
    //this calls the helper function to see if shift is valid, returns false if not
    if (!shiftCheck(shift)) {
      return false;
    }
    //this is a complete array of the alphabet which will serve as the cipher
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    //this sets the input to all lowercase and splits it into an array
    input = input.toLowerCase().split("");
    //take the input, use map to iterate through the array and preform logic
    const result = input.map((letter) => {
      //this will check for and return symbols
      if (!alphabet.includes(letter)) {
        return letter;
      }
      //space check
      if (letter == " ") {
        return " ";
      }
      //this retreives the index in the alphabet, of the current letter
      letterIndex = alphabet.indexOf(letter);
      //this is just a default value
      let shiftCodeOrDecode = 0;
      //this switch will determine if the message is to be encoded or decoded
      //if decoding, the value passed in for shift is negated
      encode === true
        ? (shiftCodeOrDecode = shift)
        : (shiftCodeOrDecode = -shift);
      //returning the remainder will allow for wrapping
      shiftIndex = (letterIndex + shiftCodeOrDecode) % alphabet.length;
      //this should allow for going into the negatives
      shiftIndex = (shiftIndex + alphabet.length) % alphabet.length;
      //this will return to result
      return alphabet[shiftIndex];
    });
    //formatting according to the rubric
    return result.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
