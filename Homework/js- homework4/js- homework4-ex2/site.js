
function reStyle(){
    let a = document.getElementById('h1');
    console.log(a.innerHTML);
    if(a.innerHTML=="Moshe"){
        console.log("I'm here1");
        a.innerHTML ="Kobi";        
        a.style.textDecoration = "underline";
        console.log(a.innerHTML);
    }
    else if(a.innerHTML=="Kobi"){
        console.log("I'm here2");
        a.style.textDecoration = "none";
        a.innerHTML ='Moshe';
    }
}
