//Filter range "in place"
//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b | The function should only modify the array. It should not return anything. |

/* Psuedo Code Break down
- Create a function with arguments called filterRangeInPlace(arr, a, b)
- Removes what from an array called arr? Elements that are the values. All Values except those that are between a and b meaning a ≤ arr[i] ≤ b
- Hence if the value is greater than "a" or less than "b" it removes said value from the array 
- e.g a = 5, b = 10. im looking to keep values that are between 5 and 10 i,e 6,7,8,9 SO if value is 1,2,3,4 same for 10+
- Hence Value < a or Value > 10 will be removed
- How do i remove? By looping through each array element / value one by one then what? Modify the array without returning it
- Hence using splice which does exactly that
*/

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]

        if (value < a || value > b) {
            arr.splice(i, 1) // Start at i then remove 1
            i-- // Here the index is decremented, this is cuz otherwise after index 0 is removed, i becomes i++ = 1, now it splices from 1 instead of 0 again there by skipping the new value at 0 since the original array was modified by removing the inital index 0
        }
    }
}

//Sort in decreasing order

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10