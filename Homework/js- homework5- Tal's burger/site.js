let countCheese=0;

function plusCheese(){
    if(countCheese<2){
        const cheeseDiv = document.getElementById("cheeseDiv");
        let cheeseToAdd = document.createElement("div");
        cheeseToAdd.className = "cheese";
        cheeseToAdd.id="cheese"+(++countCheese);
        cheeseDiv.appendChild(cheeseToAdd);
        plusPrice(9);
    }
    else{
        alert("Two cheese additions are the maximum allowed!")
    }
}

function minusCheese(){
    if(countCheese>0){
        let id = "cheese"+(countCheese--);
        const cheeseToRemove = document.getElementById(id);
        let cheeseDiv = document.getElementById("cheeseDiv");
        cheeseDiv.removeChild(cheeseToRemove);
        minusPrice(9);
    }
    else{
        alert("There is no cheese to remove!")
    }
}

let countMeat=0;

function plusMeat(){
    if(countMeat<1){
        const meatDiv = document.getElementById("meatDiv");
        let meatToAdd = document.createElement("div");
        meatToAdd.className = "meat";
        meatToAdd.id="meat"+(++countMeat);
        meatDiv.appendChild(meatToAdd);
        plusPrice(17);
    }
    else{
        alert("One meat addition are the maximum allowed!")
    }
}

function minusMeat(){
    if(countMeat>0){
        let id = "meat"+(countMeat--);
        const meatToRemove = document.getElementById(id);
        let meatDiv = document.getElementById("meatDiv");
        meatDiv.removeChild(meatToRemove);
        minusPrice(17);
    }
    else{
        alert("There is no meat to remove!")
    }
}

let countTomato=0;

function plusTomato(){
    if(countTomato<2){
        const tomatoDiv = document.getElementById("tomatoDiv");
        let tomatoToAdd = document.createElement("div");
        tomatoToAdd.className = "tomato";
        tomatoToAdd.id="tomato"+(++countTomato);
        tomatoDiv.appendChild(tomatoToAdd);
        plusPrice(5);
    }
    else{
        alert("Two tomato additions are the maximum allowed!")
    }
}

function minusTomato(){
    if(countTomato>0){
        let id = "tomato"+(countTomato--);
        const tomatoToRemove = document.getElementById(id);
        let tomatoDiv = document.getElementById("tomatoDiv");
        tomatoDiv.removeChild(tomatoToRemove);
        minusPrice(5);
    }
    else{
        alert("There is no tomato to remove!")
    }
}

let countLettuce=0;

function plusLettuce(){
    if(countLettuce<2){
        const lettuceDiv = document.getElementById("lettuceDiv");
        let lettuceToAdd = document.createElement("div");
        lettuceToAdd.className = "lettuce";
        lettuceToAdd.id="lettuce"+(++countLettuce);
        lettuceDiv.appendChild(lettuceToAdd);
        plusPrice(4);
    }
    else{
        alert("Two lettuce additions are the maximum allowed!")
    }

}

function minusLettuce(){
    if(countLettuce>0){
        let id = "lettuce"+(countLettuce--);
        const lettuceToRemove = document.getElementById(id);
        let lettuceDiv = document.getElementById("lettuceDiv");
        lettuceDiv.removeChild(lettuceToRemove);
        minusPrice(4);
    }
    else{
        alert("There is no lettuce to remove!")
    }    
}

function plusPrice(priceToAdd){
    let priceSpan = document.getElementById("price");
    let currentPrice = parseInt(priceSpan.innerHTML);
    let newPrice=currentPrice+priceToAdd;
    priceSpan.innerHTML=newPrice;
}

function minusPrice(PriceToRemove){
    let priceSpan = document.getElementById("price");
    let currentPrice= parseInt(priceSpan.innerHTML);
    if(currentPrice>40){
        let newPrice=currentPrice- PriceToRemove;
        priceSpan.innerHTML=newPrice;
    }   
}