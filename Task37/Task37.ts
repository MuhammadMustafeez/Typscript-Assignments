class Shirt {
    size: string;
    message: string;

constructor(size: string = "large", message: string = "I love TypeScript") {
this.size = size;
this.message = message;
}
make_shirt(){
    console.log(`The shirt size is ${this.size}, and ${this.message}`);
}
}
let  largeShirtDefault = new Shirt(); // Large shirt with default message
let mediumShirtDefault = new Shirt("medium"); // Medium shirt with default message
let customShirt = new Shirt("small", "Its fit"); // Custom-sized shirt with custom message
largeShirtDefault.make_shirt();
mediumShirtDefault.make_shirt();
customShirt.make_shirt();