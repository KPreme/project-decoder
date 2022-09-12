// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, newAlphabets, encode = true) {
    // your solution code here
    if (newAlphabets === undefined || newAlphabets.length !== 26) return false;
    let temp = "";
    for (let char of newAlphabets) {
      if (temp.includes(char)) return false;
      temp += char;
    }
    let message = "";

    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        message += " ";
      } else {
        if (!encode) {
          let index = newAlphabets.indexOf(input[i]);
          message += alphabets[index];
        } else {
          let index = alphabets.indexOf(input[i]);
          message += newAlphabets[index];
        }
      }
    }
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };