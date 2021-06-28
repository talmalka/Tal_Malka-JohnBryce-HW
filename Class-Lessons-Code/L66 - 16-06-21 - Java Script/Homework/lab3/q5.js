function biggest(input){
    return input.reduce((a,b)=>Math.max(a,b));
    return input.sort()[input.length - 1];
}

let numbers = [5,10,80,60,50,100,70];

console.log('\nthe biggest number is : ' +biggest(numbers) +' from ' + numbers);
