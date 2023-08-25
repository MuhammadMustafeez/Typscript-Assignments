"use strict";
console.log("Tests for equality and inequality with strings:");
let a = "apple";
let b = "banana";
console.log(a === b);
console.log(a !== b, "\n");
//Next using the Lowercase Function
console.log("Test using the Lowercase Function:");
let tex = "Hello World!";
console.log(tex.toLocaleLowerCase() === "hello world!");
console.log(tex.toLocaleLowerCase() !== "hello world!\n");
//Numerical Test.
console.log("Numerical Test:");
let num1 = 4;
let num2 = 7;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2, "\n");
//&& and || test
console.log("Test of && and ||:");
let x = 5;
let y = 15;
console.log(x > 3 && y < 15);
console.log(x > 7 && y < 8);
console.log(x > 7 || y < 8);
console.log(x < 3 || y > 15, "\n");
//to check item is present in an array.
console.log("To check Item is present:");
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("apple"));
console.log(fruits.includes("grape"), "\n");
//To check item is not present in an array.
console.log("To check Item is not present:");
let vegetables = ["gingerbell", "broccoli", "spinach"];
console.log(!vegetables.includes("zucchini"));
console.log(!vegetables.includes("broccoli"));
