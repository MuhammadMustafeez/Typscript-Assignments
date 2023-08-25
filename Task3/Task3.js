var full_name = "Muhammad Mustafeez";
var capital_letter = full_name.toUpperCase();
var small_letter = full_name.toLowerCase();
var title_letter = console.log("Full Name in Capital letter:", capital_letter); //Capital Letters
console.log("Full Name in Small letter:", small_letter); //Small Letters
function toTitleCase(input) {
    return input.toLowerCase().replace(/(?:^|\s)\w/g, function (match) { return match.toUpperCase(); });
}
var userInput = prompt("Enter a string:");
var titleCasedString = toTitleCase(userInput);
console.log("Original string:", userInput);
console.log("Title-cased string:", titleCasedString);
