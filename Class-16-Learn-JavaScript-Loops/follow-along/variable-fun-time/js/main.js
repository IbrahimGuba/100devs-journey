//--- Easy
//create a variable and assign it a number
let funVariable = 36

//minus 10 from that number
funVariable = funVariable - 10

//print that number to the console
console.log(funVariable);

//--- Medium
//create a variable that holds a value from the input
// let userInput = document.querySelector("#danceDanceRevolution").value

//add 25 to that number
// userInput = userInput + 25

//alert that number
// alert(userInput)

//--- Hard
//create a variable that holds the h1
const myh1= document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
myh1.addEventListener('click', sum)

function sum() {
    //create a variable that holds a value from the input
    let userInput = document.querySelector("#danceDanceRevolution").value
    console.log(funVariable + Number(userInput))
}