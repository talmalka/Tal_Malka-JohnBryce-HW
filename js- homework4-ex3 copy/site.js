var a='red';
var b='green';
color=a;

function reStyle(){
    const list = document.getElementsByTagName('a');
    [].forEach.call(list,item => {item.style.color=color})    
    switchColors();
}

function switchColors(){
    if(color===a){
        color=b;
    }
    else{
        color=a;
    }
}