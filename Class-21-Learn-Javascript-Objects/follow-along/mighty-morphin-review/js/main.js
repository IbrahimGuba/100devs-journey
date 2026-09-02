// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "Spring"
console.log(favHoliday.toUpperCase()) 

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let sirString = "I am Sir String's a lot"
alert(sirString.slice(-3))


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function absoluteValue(n1, n2, n3, n4, n5) {
    let sub;
    sub = 100 - n1 - n2 - n3 - n4 - n5;
    return Math.abs(sub)
}

// alert(absoluteValue(10,10,10,10,10))

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function bigThree(kendrick, kdot, kung_fu_kenny) {
    const lowest = Math.min(kendrick, kdot, kung_fu_kenny);
    const highest = Math.max(kendrick, kdot, kung_fu_kenny);

    console.log("Lowest:", lowest);
    console.log("Highest:", highest);
}

bigThree(3,6,9)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
    const flip = Math.round(Math.random())

    if (flip < .5) {
        return 'Heads'
    } else {
        return 'Tails'
    }

}

// One Line
// let headsOrTails = (flip) => .5 ? 'Heads' : 'Tails'

console.log(headsOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function looping(x) {
    
    for(i = 0; i < x; i++) {
        console.log(headsOrTails())
    }
}

looping(3)