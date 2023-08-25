"use strict";
// Program 1: Calculate the average of two numbers.
let num1 = 4;
let num2 = 9;
let avg = num1 + num2 / 2;
// Print the average of two number.
console.log("The average is: " + avg);
// Program 2: Check if a number is positive or negative or zero.
// Function to check if a number is positive or negative or zero.
function check(num) {
    if (num > 0) {
        return "The number is positive";
    }
    else if (num < 0) {
        return "The number is negative";
    }
    else {
        return "The number is zero";
    }
}
// Print the result of checking 0 if it is negative or positive or zero.
console.log(check(0));
