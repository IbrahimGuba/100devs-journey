//Create a conditonal that checks their age
//If under 16, tell them they can not drive
// userAge = document.getElementById("#daneDanceRevolution")

// let userAge = 22

// if (userAge < 16) {
//     console.log("You aren't old enough to drive")
//     }

// //If under 18, tell them they can't hate from outside the club, because they can't even get in
// else if (userAge < 18) {
//     console.log("You can't hate from outside the club, you can't even get in hahaha")
// }

// //If under 21, tell them they can not drink
// else if (userAge < 21) {
//     console.log("You can not drink!")
// }

// //If under 25, tell them they can not rent cars affordably
// else if (userAge < 25) {
//     console.log("You can not rent cars affordably")
// }

// //If under 30, tell them they can not rent fancy cars affordably
// else if (userAge < 30) {
//     console.log("You can not rent fancy cars affordably")
// }

// //If over 30, tell them there is nothing left to look forward too
// else if (userAge >= 30) {
//     console.log("There is nothing left to look forward too")
// }

// else {
//     alert("Truly you have reached UNC status")
// }


//--- Harder
//On click of the h1

//Take the value from the input

//Place the result of the conditional in the paragraph
const input = document.querySelector("#danceDanceRevolution");
const heading = document.querySelector("h1");
const result = document.querySelector("p");

heading.addEventListener("click", checkAge);

function checkAge() {
    let userAge = Number(input.value);

    if (userAge < 16) {
        result.textContent = "You aren't old enough to drive";
    }

    else if (userAge < 18) {
        result.textContent = "You can't hate from outside the club, you can't even get in hahaha";
    }

    else if (userAge < 21) {
        result.textContent = "You can not drink!";
    }

    else if (userAge < 25) {
        result.textContent = "You can not rent cars affordably";
    }

    else if (userAge < 30) {
        result.textContent = "You can not rent fancy cars affordably";
    }

    else {
        result.textContent = "There is nothing left to look forward to";
    }
}