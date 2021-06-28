var a = 1000;

function f(){
    var b = 500;
    console.log(a);//1000 - Closure
    console.log(b);//500 
    console.log(c);//undefined - Hoisting
    if(true){
        var c = 3000;
    }
}

f();

console.log(a);// 1000
console.log(b);// ReferenceError: b is not defined
console.log(c);// Unreachable...