// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

let Celsius = Number(prompt("Enter the temperature in Celsius"))

let Fahrenheit = Celsius * 9/5 + 32
console.log(Fahrenheit)