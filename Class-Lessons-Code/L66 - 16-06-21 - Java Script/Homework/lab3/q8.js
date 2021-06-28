function getTimeInDigital(){
    let current = new Date();
    let time = current.toLocaleTimeString("en-IL");
    return time;
}

console.log('\n'+getTimeInDigital());