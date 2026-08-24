    //Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

const month = Number(prompt("Enter a month number (1-12):"));

if (month % 1 !== 0 || month < 1 || month > 12) {
    console.log("Invalid month number");
} else {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(`The month #${month} has 31 days`);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(`The month #${month} has 30 days`);
            break;
        case 2:
            console.log(`The month #${month} has 28 days`);
            break;
    }
}

// The same program however i can use functions and other data types consiting of functions arrays etc.

/*
function getDaysInMonth(month) {
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Validate input
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    return "Invalid input: please enter a whole number between 1 and 12.";
  } else {
    return `Month ${month} has ${daysInMonths[month - 1]} days.`;
}
}

// --- Example usage with prompt() (browser) ---
let input = prompt("Enter a month number (1-12):");
let month = Number(input);

console.log(getDaysInMonth(month));
/*