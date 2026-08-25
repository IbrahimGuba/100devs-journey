//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

// // Declare an array
// let words = [""]

// // Variable that stores a word prompted from the user


// // Checks if that word is "stop" or not, if it is. It stops, if it's not add the given word to an array

// for (i = 0; i !== "stop"; i++) {
//     let word = prompt("Type a word")
//     if (word === "stop") {
//         words = words.push();
//     }
//     // If stop is true, print the array
//     else {
//         console.log(words)
//     }
// }

// True Solution.
const words = [];
let word = prompt("Enter a word:");

while (word.toLowerCase() !== "stop") {
    words.push(word);
    word = prompt("Enter another word:");
}

console.log(words);