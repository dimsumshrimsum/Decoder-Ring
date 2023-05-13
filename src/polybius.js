// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    //this cipher object will serve as the decoder and encoder
    const cipher = {
      1: ["a", "f", "l", "q", "v"],
      2: ["b", "g", "m", "r", "w"],
      3: ["c", "h", "n", "s", "x"],
      4: ["d", "i", "o", "t", "y"],
      5: ["e", "k", "p", "u", "z"],
    };

    //declaring a new array to fill with new message, mapping when
    //encoding and using push when decoding
    let result = [];
    //seperate checks for encode and decode
    if (encode == true) {
      input = input.toLowerCase().split("");
      //mapping input message to result array
      result = input.map((letter) => {
        for (let number1 in cipher) {
          //this will check for spaces
          if (letter === " ") {
            return " ";
          }
          //this will check for the overlap of i and j
          if (letter == "i" || letter == "j") {
            return "42";
          }
          //every iteration looks for the matching letter
          //in the array, at the current key
          const number2 = cipher[number1].indexOf(letter);
          //this is a simple check for a matching letter
          //based on the mechanics of .indexOf
          if (number2 >= 0) {
            //returns the object key anf the index (+1) of
            //the matching letter
            return `${number1}${number2 + 1}`;
          }
        }
      });
    }

    if (encode == false) {
      input = input.split("");
      //checking for even numbers
      const evenCheck = input.filter((number) => {
        return number !== " ";
      });
      //modulus to check for any remainder when divided by 2
      if (evenCheck.length % 2 !== 0) {
        return false;
      }

      //once even is checked will iterate through input for decoding
      //designed to jump two places in the input array
      for (let i = 0; i < input.length; i += 2) {
        //checks for and pushes spaces, if found i is minused one to
        //account for the space
        if (input[i] === " ") {
          result.push(" ");
          i--;
          continue;
        }
        //checks for 42 and returns i/j
        if (input[i] == 4 && input[i + 1] == 2) {
          result.push("i/j");
          continue;
        }

        //this returns the decoded message based on the coordinates provided
        //by the input, accounting for the natural indexing of arrays
        result.push(cipher[input[i]][input[i + 1] - 1]);
      }
    }

    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
