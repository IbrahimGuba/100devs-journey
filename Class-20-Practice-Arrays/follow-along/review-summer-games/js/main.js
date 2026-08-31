//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiplyNum(nums) {
  
let product = 1

    for (i = 0; i < nums.length; i++) {
        product *= nums[i]
    }

    alert(product)
}

multiplyNum([1,2,3,4])

// Or

/*
function multiplyNum(nums) {
  
let product = 1

    nums.forEach(num => {
        product *= num
    })

    alert(product)
}

multiplyNum([1,2,3,4])
*/
