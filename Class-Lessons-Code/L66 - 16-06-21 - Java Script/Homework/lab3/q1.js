function isValidEmail(email) {

    var res = email.split('@');
    return res.length == 2;
}


var example1 = 'kobi@@@gmail.com';
var example2 = 'reshef@gmail.com';
var example3 = 'neta@gmail.com'

console.log(isValidEmail(example1));
console.log(isValidEmail(example2));
console.log(isValidEmail(example3));