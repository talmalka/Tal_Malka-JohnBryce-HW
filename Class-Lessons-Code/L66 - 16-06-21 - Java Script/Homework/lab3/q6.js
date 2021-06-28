function time8H20M(){
    var current = new Date();
    current.setHours(current.getHours()+8);
    current.setMinutes(current.getMinutes()-20);
    return current.getHours()+":"+current.getMinutes()+":"+current.getSeconds();
}

console.log(time8H20M());