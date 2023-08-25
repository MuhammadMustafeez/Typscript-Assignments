"use strict";
let sample_arr = [1, 2, 3, "Muhammad", true];
let value = sample_arr[10]; // Accessing an index that doesn't exist
//It give  undefined error that the array index is not present   
console.log(value);
//Now the correct index message.
console.log("To solve this error we need to put the correct index no i.e:");
value = sample_arr[3];
console.log(value);
