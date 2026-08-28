// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "Rice"
favFood = "Pizza"
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let aString = "Some String i guess"
alert(aString[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNumbers(n1,n2,n3) {
    return n1 / n2 * n3 
}

alert(threeNumbers(10,2,3))

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function takeOne(a) {
    console.log(Math.cbrt(a))
}
console.log("\nCube Root")
takeOne(10)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
let inputMonth = prompt("Enter a month")
function myMonth(month) {
    let leMonth = month.toLowerCase() 
    if (leMonth === 'june' || leMonth === 'july' || leMonth === 'august') {
        alert("YAY")
    } else {
        alert("Booo")
    }
}
myMonth(inputMonth)


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
let leNumber = Number(prompt("Enter a number"))
for (i = 1; i <= leNumber; i++) {
    if (i % 5 === 0) {
        continue;
    } else {
        console.log(i)
    }
}