
// Get a number and return it's factorial
function fact(num){
    if(num==0){
        return 1;
    }
    if(num==1|num==2){
        return num;
    }
    return fact(num-1)*num;
}

// Validate there is only one @ sign in the email adress
function validateEmail(email){
    if(email.split("@").length!=2){
        return false;
    }
    return true;
}

// Get a string and print an inner sub-string by the index and length
function findInnerPhrase(string, index, length){
    return(string.substring(index, index+length));
}

// Get a sentence and print it in a reverse order
function reverseSentence(sentence){
    const words=sentence.split(" ");
    const reverseWords=words.reverse().join(" ");
    return reverseWords;
}

//Check if the given book's name exists in the books' array
const booksArrays =["book1", "book2", "book3", "book4", "book5", "book6"];
function isBookExists(book){
    return (booksArrays.includes(book));
}

// Find the max number out of four given numbers
function findMax(num1, num2, num3, num4){
    const array = [num1, num2, num3, num4];
    return Math.max(...array);
}

// Time in 8 hours minus 20 minutes
function futureClock(){
    const date=new Date();
    date.setHours(date.getHours()+8);
    date.setMinutes(date.getMinutes()-20);
    return date.toLocaleTimeString();
}

function lottery(){
    console.log("Lottery Numbers:");
    for(let i=0;i<5;i++){
        console.log(Math.floor(Math.random() * 99)+1);
    }
    console.log("Luck number: "+(Math.floor(Math.random() * 9)+1));    
}

//Current time in format of hh:mm:ss
function currentClock(){
    const date=new Date();
    return date.toLocaleTimeString();;
}

//Test the above functions:

console.log(fact(0));
console.log(fact(5));

console.log("-------------------------");

console.log(validateEmail("talm996@gmail.com"));
console.log(validateEmail("talm996gmail.com"));
console.log(validateEmail("talm996@@@gmail.com"));

console.log("-------------------------");

console.log(findInnerPhrase("importance",0,6));

console.log("-------------------------");

console.log(reverseSentence("one two three"));
console.log(reverseSentence("Itay Tal Shahar"));

console.log("-------------------------");

console.log(isBookExists("book1"));
console.log(isBookExists("book7"));

console.log("-------------------------");

console.log(findMax(4,5,1,2));
console.log(findMax(4,5,9,2));

console.log("-------------------------");

console.log(futureClock());

console.log("-------------------------");

lottery();

console.log("-------------------------");

console.log(currentClock());

console.log("-------------------------");


