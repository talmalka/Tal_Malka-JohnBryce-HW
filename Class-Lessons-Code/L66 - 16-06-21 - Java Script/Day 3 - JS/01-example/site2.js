var res1 = function(omri){
    console.log(omri*omri);
}
res1(5);

var res2 = function(neta){
    return neta*neta;
}
console.log(res2(6));

var res3 = res2;
console.log(res3,typeof(res3));