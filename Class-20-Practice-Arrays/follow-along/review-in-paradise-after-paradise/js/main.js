// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

const anArray = [5,10,15,20,25];

function funkyArray(anArray) {
    if (anArray[0] < anArray[anArray.length - 1]) {
        alert("Hi")
    } else if (anArray[0] > anArray[anArray.length - 1]) {
        alert("Bye")
    } else {
        alert("We Close in an hour")
    }
}

funkyArray