"use strict";
let current_users = ["Muhammad", "Ahmad", "Hammad", "Shezad", "Shehyar"];
let new_users = ["Mustafeez", "Ali", "Hammad", "Shezad", "Tayyab"];
for (let new_user of new_users) {
    if (current_users.includes(new_user)) {
        console.log(`User ${new_user} has already been used, try another one`);
    }
    else {
        console.log(`User ${new_user} has been admitted`);
    }
}
