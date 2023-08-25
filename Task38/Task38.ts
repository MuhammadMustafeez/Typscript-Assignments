function describe_cities(city:string,country:string="Not Known"):void{
   console.log(`${city} is in ${country}.`);
}
describe_cities("Karachi","Pakistan");
describe_cities("London","Uk");
describe_cities("Tokyo");