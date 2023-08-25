let full_name="Muhammad Mustafeez";
let capital_letter=full_name.toUpperCase();
let small_letter=full_name.toLowerCase();
let title_letter=
console.log("Full Name in Capital letter:",capital_letter);//Capital Letters
console.log("Full Name in Small letter:",small_letter);//Small Letters
function toTitleCase(input: string): string {
    return input.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
  }
  
  const userInput = prompt("Enter a string:");
  const titleCasedString = toTitleCase(userInput);
  
  console.log("Original string:", userInput);
  console.log("Title-cased string:", titleCasedString);
