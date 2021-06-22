
function reStyle(){
    let a = document.getElementById('h1');
    console.log(a.innerHTML);
    if(a.innerHTML=="Moshe"){
        a.innerHTML ="<u>Kobi</u>";   
    }
    else if(a.innerHTML=="<u>Kobi</u>"){
        a.innerHTML ='Moshe';
    }
}
