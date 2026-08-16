// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

let day = prompt("Give a day of the week and i'll give you the next!")

if (day === "monday") {
    console.log("The next day is tuesday")
}
else if (day === "tuesday") {
    console.log("The next day is wednesday")
}
else if (day === "wednesday") {
    console.log("The next day is thursday")
}
else if (day === "thursday") {
    console.log("The next day is friday")
}
else if (day === "friday") {
    console.log("The next day is saturday")
}
else if (day === "saturday") {
    console.log("The next day is sunday")
}
else if (day === "sunday") {
    console.log("The next day is monday")
}
else {
    console.log("That's not a day of the week")
}