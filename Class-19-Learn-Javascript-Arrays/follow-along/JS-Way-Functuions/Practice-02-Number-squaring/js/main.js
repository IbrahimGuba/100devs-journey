// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
  // TODO: complete the function code
  x = x ** 2
  return x
}

// Square the given number x
const square2 = x => x ** 2 // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log("\nResults of square2")
console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

// When it's done, update the program so that it shows the square of every number between 0 and 10.
console.log("\nNumbers 0 through 10 Squared")
for (i = 0; i <= 10; i++) {
  console.log(square1([i]))
}