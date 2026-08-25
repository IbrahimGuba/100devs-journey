//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

function twoNumbers(n1,n2) {
    if (n1 === n2) {
        console.log("Both numbers are the same")
    } else if (n1 > n2) {
        console.log("Your first number is greater than the second")
    } else if (n1 < n2) {
        console.log("Your second number is greater than your first number.")
    } else {
        console.log("That is not a valid input, provide a number")
    }
}

twoNumbers(3,3)
twoNumbers(4,5)
twoNumbers(6,2)
