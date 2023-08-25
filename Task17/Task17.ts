// Intial guest list
let lists_guest=["Muhammad","Ali","Sufyan"];
for(let guest of lists_guest){
        console.log(`Hello ${guest},I would like to invite you to my Dinner party.\n`);
}
//unable to attend guest.
let unabletoattend="Ali";
console.log(`${unabletoattend} is not going to attend Dinner party`);

// Find the index of the guest who can't make it
let indexOfUnableToAttend = lists_guest.indexOf(unabletoattend);

if (indexOfUnableToAttend !== -1) {
  // New guest to invite
  let new_guests = "Ahmad";

  // Replace the guest who can't make it with the new person
  lists_guest[indexOfUnableToAttend] =new_guests;

  // Print the updated guest list
  console.log("Updated Guest List:");
  console.log(lists_guest);

  // Now Printing the invitation message Again using For loop
  console.log("Invitation Messages:");
  for(let guest of lists_guest){
    console.log(`Hello ${guest},I would like to invite you to my Dinner party.\n`);
}
} 
else {
  console.log(`${unabletoattend} was not found in the guest list.\n`);
}
//Found a bigger dinner table
console.log("I found a bigger dinner table.");
//New guest
let new_guest="Muhaiman";
lists_guest.unshift(new_guest);
let middle_guest="Mahad";
lists_guest.splice(1,0,middle_guest);
let last_guest="Owais";
lists_guest.push(last_guest);
for(let newguest of lists_guest){
    console.log(`Hello ${newguest},I would Like to invite to my the Dinner party at home.\n`)
}
//Remove guest from list_guest.
console.log(`I can invite only two Guest.`);
//removing guest one at a time.
for(let i=lists_guest.length;i>=3;i--){
   let removedguest=lists_guest.pop();
   if(removedguest){
   console.log(`${removedguest} Sorry you are not invited to dinner`)
   }
}for(let y of lists_guest){
   console.log(`Hello ${y},YOu are invited to the dinner party`);
}
//now removing the remaining guest from the list.
lists_guest.pop();
lists_guest.pop();
console.log("Final list:",lists_guest);
