// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// node inspect index.js
// c to continue
// repl to check variables
function reverse(str) {
  // debugger;
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

// reverse("abcde");

module.exports = reverse;
