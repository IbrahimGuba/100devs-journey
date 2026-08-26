// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// let number = Number(prompt("Enter a number: "));

// while (number > 100) {
//   number = Number(prompt("Enter a number: "));
//   console.log(number);
// }
// console.log("You entered:", number);

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

let improvedNumber = Number(prompt("Enter a number: "));

while (improvedNumber < 50 || improvedNumber > 100) {
  improvedNumber = Number(prompt("Enter a number: "));
  console.log(improvedNumber);
}
console.log("You entered:", improvedNumber);