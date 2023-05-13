// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    //checks for a value in the code alphabet
    if (!alphabet) {
      return false;
    }
    //formatting
    input = input.toLowerCase();
    input = input.split("");
    codephabet = alphabet.split("");
    //checks to make sure the provided alph is 26 char
    if (codephabet.length != 26) {
      return false;
    }
    //an array of the alphabet to serve as the refernece
    const myAlphabet = [
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
    //checks for unique characters by creating a set and checks against the
    //length against the provided alphabet
    const uniqueCheck = new Set(codephabet);
    if (uniqueCheck.size !== codephabet.length) {
      return false;
    }
    //moves alphabet into a new object with the alphabet as the keys
    //and the code alphabet as value, or vise versa based on the value of
    //endoce
    const codeObject = myAlphabet.reduce((cdObj, codeLetter, i) => {
      if (encode == true) {
        cdObj[codeLetter] = codephabet[i];
      }
      if (encode == false) {
        cdObj[codephabet[i]] = codeLetter;
      }
      return cdObj;
    }, {});
    //maps input to encoded or decoded messgae using new alphabet object
    //all encode/decode checks are done above
    const result = input.map((letter) => {
      if (letter == " ") {
        return " ";
      }
      return codeObject[letter];
    });

    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
