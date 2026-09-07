//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["Merlin", "Davinci's Demons", "Avatar the last airbender"]

for (let i = 0; i < tvShows.length; i++) {
    console.log(tvShows[i])
}

// Using ForEach
console.log("\n Using For Each")
tvShows.forEach(show => {
    console.log(show)
});

//Create an array of numbers
let numArray = [3, 6, 9, 12, 15]
//Return a new array of numbers that includes every even number from the previous Arrays
let filterEven = arr => arr.filter(num => num % 2 === 0) 

console.log(filterEven(numArray))

console.log("\n Not Using Filter Method")
let noFilter = arr => {
    let result = []
    for (let i = 0; i < numArray.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i])
        }
    }
    return result
}

// console.log(noFilter(numArray))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
let sumNumArray = [5, 25, 20, 15, 10]

function sortArray(arr) {
    let sorted = arr.sort((a,b) => a-b)
    alert(`Second Lowest Number: ${arr[1]} \nSecond Highest Number: ${arr[sumNumArray.length - 2]}`)
    return sorted
}

sortArray(sumNumArray) // Should be 10 and 20