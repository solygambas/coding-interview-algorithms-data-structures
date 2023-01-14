// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let x = 1; x <= n; x++) {
//     let string = "#".repeat(x);
//     if (string.length < n) {
//       string += " ".repeat(n - x);
//     }
//     console.log(string);
//   }
// }

// function steps(n) {
//   for (let row = 0; row < n; row++) { // quadratic runtime (N^2): "the handshake problem" O(n^2)
//     let stair = "";
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}

module.exports = steps;
