// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

let rawPrice = Number(prompt("What is the raw price of your item"));

let vatRate = 0.206

let finalPrice = rawPrice * (1 + vatRate);

console.log(finalPrice)