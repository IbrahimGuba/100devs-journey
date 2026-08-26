// Write a program that asks the user for a number, then shows the multiplication table for this number.
// let x = Number(prompt("Enter a number"))

// console.log("Multiplication table of ", x)

// for (i = 1; i <= 12; i++) {
//     let result = x * i
//     console.log(`${x} * ${i} = ${result}`)
// }

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let x = Number(prompt("Enter a number between 2 and 9"));

while (x < 2 || x > 9) {
    x = Number(prompt("Enter a number between 2 and 9"));
}

console.log("Multiplication table of ", x);

for (let i = 1; i <= 12; i++) {
    let result = x * i;
    console.log(`${x} * ${i} = ${result}`);
}