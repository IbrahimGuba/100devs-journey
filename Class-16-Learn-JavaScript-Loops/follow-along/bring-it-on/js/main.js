// *Variables*
// Create a variable and console log the value
let logVariable = 'LETS GOOO'

console.log(logVariable)

// Create a variable, add 10 to it, and alert the value
let addToVariable = 20;
addToVariable = addToVariable + 10

console.log(addToVariable )


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNums(num1,num2,num3,num4) {
    alert(num1-num2-num3-num4)
}
subFourNums(15,5,3,2)


// Create a function that divides one number by another and returns the remainder
function division(x, y) {
    return x & y
}
console.log(division(10,4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(n1, n2) {
    let sum = n1 + n2;

    if (sum > 50) {
        alert('Jumanji')
    }

}

addTwo(25,26)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(a, b, c) {
    let product = a * b * c;

    if (product % 3 === 0) {
        alert('ZEBRA')
    }

}
multiplyThree(2,6,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNumber(word,number) {
    for(i = 1; i <= number; i++) {
        console.log(word)
    }
}
wordAndNumber('ULTIMATE INFINITE', 8)