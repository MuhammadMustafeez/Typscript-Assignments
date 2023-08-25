let num=[1,2,3,4,5,6,7,8,9];
for(let n of num){
    let ordinalending:string;
    if(n===1){
    ordinalending="st";
    }else if(n===2){
        ordinalending="nd";
    }else if(n===3){
        ordinalending="rd";
    }else{
        ordinalending="th";
    }
    console.log(`${n}${ordinalending}`);
}