"use strict";
function order_of_sandwatches(...items) {
    for (let item of items) {
        console.log(`- ${item} Sandwatches`);
    }
    console.log("Enjoy your Sandwatch!");
}
order_of_sandwatches("Cheese", "Chicken", "Jans");
order_of_sandwatches("Apple", "Cake");
order_of_sandwatches("Egg", "Seafood", "Grilled", "Ham");
