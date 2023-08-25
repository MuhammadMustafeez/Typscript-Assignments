let usernames=["admin","Ahmad","Sufyan","Ahmad","Ali","Muhammad"];
for(let x of usernames){
    if(x==usernames[0]){
        console.log(`Hello ${x}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${x}, thank you for logging in again.`)
    }
}