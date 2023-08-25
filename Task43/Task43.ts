// Function to add "Great" to magician names
function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.map(magician => `Great ${magician}`);
    return greatMagicians;
  }
  
  // Function to display magician names
  function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
  }
  
  let originalMagicians= ["Muhammad", "Ali", "Sufyan"];
  let greatMagicians= make_great([...originalMagicians]);
  
  console.log("Original Magicians:");
  show_magicians(originalMagicians);
  
  console.log("\nGreat Magicians:");
  show_magicians(greatMagicians)