"use strict";
function describe_cities(city, country = "Not Known") {
    console.log(`${city} is in ${country}.`);
}
describe_cities("Karachi", "Pakistan");
describe_cities("London", "Uk");
describe_cities("Tokyo");
