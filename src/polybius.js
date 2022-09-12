// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
    const encoder = {
      a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33", o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45", z: "55",
    };

    const decoder = {
11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
    };

    input = input.split("");

    if (encode) {
      return input.reduce((results, char) => {
        char = char.toLowerCase();
        const code = char.charCodeAt();
        if (code >= 97 && code <= 122) {
          return `${results}${encoder[char]}`;
        }
        return `${results}${char}`;
      }, "");
    }

    const result1 = input.reduce((counter, char1) => {
      return char1 !== " " ? counter + 1 : counter;
    }, 0);

    if (result1 % 2 !== 0) return false;

    let message = "";

    for (let i = 0; i < input.length; i += 2) {
      if (input[i] !== " ") {
        let encoded = input[i] + input[i + 1];
        let decoded = decoder[encoded];
        message = `${message}${decoded}`;
      } else {
        i += 1;
        let encoded = input[i] + input[i + 1];
        let decoded = decoder[encoded];
        message = `${message} ${decoded}`;
      }
    }
    return message;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
