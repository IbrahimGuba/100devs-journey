// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let text = prompt("Entering something");

while (text !== "yes" && text !== "no") {
    text = prompt("Entering something");
}

console.log('Game Over')