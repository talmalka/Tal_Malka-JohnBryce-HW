var count = 0;

function plus(){
    var ourDiv = document.getElementById("container");
    var pToAdd = document.createElement("p"); // <p></p>
    pToAdd.id = "p"+(++count);                // <p id="p1"></p>
    pToAdd.innerHTML="Miaoooo";               // <p id="p1">Miaoooo</p>
    ourDiv.appendChild(pToAdd);
}

function minus(){
    if(count>0){
        var id = "p"+(count--);
        var pToRemove = document.getElementById(id);
        var ourDiv = document.getElementById("container");
        ourDiv.removeChild(pToRemove);
    }
}

