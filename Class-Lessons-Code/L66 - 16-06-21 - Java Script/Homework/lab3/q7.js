function lotto(len){
    
    var arr = [];
    console.log(arr);
    for(var i = 0; i < len; i++){
        arr.push(Math.round(Math.random() * 101));
    }

    return arr;
}
console.log(lotto(6));