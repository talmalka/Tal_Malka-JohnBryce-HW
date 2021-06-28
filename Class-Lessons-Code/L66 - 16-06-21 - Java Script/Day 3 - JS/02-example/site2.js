let a = 1000;

function f(){
    let b = 500;
    console.log(a);//1000 
    console.log(b);//500 
    console.log(c);//ReferenceError: c is not defined
    if(true){
        let c = 3000;
    }
}

f();

console.log(a);// Unreachable...
console.log(b);// Unreachable...
console.log(c);// Unreachable...