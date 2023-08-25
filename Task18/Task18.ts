//Places I want to visit
let Fav_place=["England", "America","Saudi Arab","Canada","Norway"];
console.log(Fav_place,"\n");
//Making a copy of array
let sortarray=[...Fav_place];
//Now sorting the array in alphabetical order.
sortarray.sort();
console.log("Alphabetical order:",sortarray,"\n");
//Order is the same of original array
console.log("Orignal Array:",Fav_place,"\n");
//now changing the alphabetical order array into reverse
sortarray.reverse();
console.log("Reverse alphabetical order:",sortarray,"\n");
//again printing the original array to see its order
console.log("Same Order of Original order:",Fav_place,"\n");
//Now Reverse the order of orignal array.
Fav_place.reverse();
console.log("Reverse order:",Fav_place,"\n");
//Again Reverse the order and come back to its orignal order
Fav_place.reverse();
console.log("Again Reverse order:",Fav_place,"\n");
//Now sorting the orignal array in alphabetical order
Fav_place.sort()
console.log("Alphabetical order of orignal:",sortarray,"\n");
//Now sorting the orignal array in reverse order
Fav_place.reverse()
console.log("Sorting of oringal array in Reverse order:",Fav_place,"\n");
