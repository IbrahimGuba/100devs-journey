//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(sub1, sub2) {
    alert (sub1 - sub2)
}

//subtract(4,2)

//create a function that divides three numbers and console logs the quotient
function divide(div1, div2, div3) {
    console.log(div1 / div2 / div3)
}

//divide(50,2,3)

//create a function that multiplys three numbers and returns the product
function mulitply(multi1, multi2, multi3) {
    multiResult = multi1 * multi2 * multi3
    return multiResult
}

console.log( mulitply(2,3,3) )

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takesThree(num1, num2, num3) {
    addTwo = num1 + num2
    return addTwo % num3
}

console.log( takesThree(2,4,4) + ' Medium')

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takesFour(n1,n2,n3,n4) {
   let product =  n1 * n2

   if (product > 100) {
    console.log(product + (n3 + n4))
   }

   else if ( product < 100) {
    console.log(product - (n3 - n4))
   }

   else {
    alert((n1 * n2 * n3) % n4)
   }
}

takesFour(2,4,3,5)