// Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    radius: r,

    circumference() {
        return 2 * Math.PI * this.radius
    },

    area() {
        return Math.PI * Math.pow(this.radius,2)
    }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);