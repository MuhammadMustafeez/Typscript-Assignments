function show_magician(arr:string[]){
    for(let y of magicians){
    console.log(`${y}`);
}
}function make_great(arr:string[]){
    for(let i=0;i<magicians.length;i++){
    magicians[i]="The Great "+magicians[i];
    }
}
let magicians=["Muhammad","Ahmad","Michal","Sami"];
console.log("Orignal Magicians:")
show_magician(magicians);

make_great(magicians);
console.log("\nMagians after the great added:");
show_magician(magicians);