"use strict";


var output = document.getElementById("cardContainer");
var textArea = document.getElementById("navText");
textArea.value = "";

output.addEventListener("click", CarLot.activateEvents, false);


function populateDOM(cars){




    for(var i = 0; i < cars.length; i++){

        // <section> Entire Card w/ bootstrap columns
        var card = document.createElement("SECTION");
            card.id = "card--" + i;
            card.className = "col-sm-6 col-md-4 card";
            card.tag = i;

        // <div> Inner card w/o bootstrap for styling
        var innerCard = document.createElement("DIV");
            innerCard.id = "innerCard--" + i;
            innerCard.className = "innerCard row";
            innerCard.tag = i;

        // <h3> Element for car's name
        var carPrice = " ($" + cars[i].price + ")";
        var carNameElement = document.createElement("H3");
            carNameElement.className = "cardHeader";
            carNameElement.innerHTML = cars[i].make + " " + cars[i].model + " " + carPrice.small();
            carNameElement.tag = i;
            

        // <div> Element to hold <img> element 
        var imageContainerElement = document.createElement("DIV");
            imageContainerElement.className = "imageContainer";
            imageContainerElement.innerHTML =  `<img class="carImage" src="${cars[i].imageSource}" tag="${i}">`;
            imageContainerElement.tag = i;

        // <span> Element to hold the car's year
        var yearElement = document.createElement("SPAN");
            yearElement.innerHTML = cars[i].year.bold();
            yearElement.tag = i;
            

        // <span> Element to hold car's description
        var descriptionElement = document.createElement("SPAN");
            descriptionElement.innerHTML = cars[i].description;
            descriptionElement.id = "desc--" + i;
            descriptionElement.className = "notImage";
            descriptionElement.style.marginLeft = "10%";
            descriptionElement.style.marginRight = "10%";
            descriptionElement.tag = i;
            
        innerCard.appendChild(carNameElement); 
        innerCard.appendChild(yearElement);
        innerCard.appendChild(imageContainerElement);  
        innerCard.appendChild(descriptionElement);

        card.appendChild(innerCard);

        // card.addEventListener("click", CarLot.activateEvents, false);


        output.appendChild(card);
    }};



    function setTextOnBlueElement(text){

    var container = document.getElementById("cardContainer");
    var children = container.childNodes;
    var finalChild;

    for(var i = 0; i < children.length; i++){
        var child = children[i].childNodes[0];
        if(child.style.backgroundColor == "lightblue"){
            finalChild = child;
            finalChild.childNodes[3].innerHTML = text;
        }
    }

    console.log("Child: ", finalChild);


};