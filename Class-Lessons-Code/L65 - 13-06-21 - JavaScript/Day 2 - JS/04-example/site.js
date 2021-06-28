var num = 5;

function fact(num){
    var sum = 1;
    if(num==1 || num==2){
        return num;
    }
    for(var i=2;i<=num;i++){
        sum*=i;
    }
    console.log(num + " fact : "+sum);

}

fact(num);