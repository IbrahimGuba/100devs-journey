//Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

/*
This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s should give 14h18m0s
6h59m59s should give 7h0m0s
23h59m59s should give 0h0m0s (midnight)
*/

let hours = Number(prompt("What is the time in hours"))
let minutes = Number(prompt("What is the time in minutes"))
let seconds = Number(prompt("What is the time in seconds"))

seconds = seconds + 1;

if (seconds === 60) {
  seconds = 0;
  minutes = minutes + 1;
} 

if (minutes === 60) {
  minutes = 0
  hours = hours + 1
} 

if (hours === 24) {
  hours = 0
  minutes = 0
  seconds = 0 
}

console.log(`The time is ${hours}h ${minutes}m ${seconds}s`)

// Bonus, i learned of pattern called "Flag" variable where you check if condition is met it is flagged with the varaible as true or false

/* You add isMidnight

let isMidnight = false;

if (hours === 24) {
  hours = 0
  minutes = 0
  seconds = 0
  isMidnight = true;
}

if (isMidnight) {
  console.log(`The time is ${hours}h ${minutes}m ${seconds}s (Midnight)`)
} else {
  console.log(`The time is ${hours}h ${minutes}m ${seconds}s`)
} 
*/