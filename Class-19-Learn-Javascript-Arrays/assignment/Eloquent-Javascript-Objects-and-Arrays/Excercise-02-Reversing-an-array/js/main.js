// Arrays have a reverse method that changes the array by inverting the order in which its elements appear
// For this exercise, write two functions, reverseArray and reverseArrayInPlace

// The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order.
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}


// The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.
function reverseArrayInPlace (arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i] // Holds initial value of the array at index 0 which is 1 then at index 1 which is 2 until i(2) < 2 is false.

        arr[i] = arr[arr.length - 1 - i] // arr[0] = arr[4 - i(0)] -> arr[1] = arr[4 - i(1)] 

        arr[arr.length - 1 - i] = temp // arr[4] = 5 -> arr[0] = 5 | arr[3] = 4 -> arr[1] = 4

    }
    return arr

}


let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

