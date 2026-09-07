//Copy and sort array
//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified. Create a function copySorted(arr) that returns such a copy.

/* Psuedo Code
- Create a function copySorted(arr)
- returns a *Sorted* *Copy* of the array arr without modifying it
- Hence Copy without modifying = .slice() & sorting = .sort()
*/

function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

