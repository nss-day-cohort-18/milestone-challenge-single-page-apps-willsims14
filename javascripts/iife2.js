"use strict";

var CarLot = (function (oldCarLot) {
    var inventory = [];

    oldCarLot.receiveInventory = function(potato){
        inventory = potato;
        console.log("Inventory: ", inventory);
    };

    oldCarLot.activateEvents = function(event){

        var textArea = document.getElementById("navText");

        console.log("Text Area: ", textArea);

        var tagIndex = event.target.parentNode.tag;

        var innerCard = document.getElementById("innerCard--" + tagIndex);

        CarLot.resetCardStyles();
        CarLot.styleClickedCard(innerCard, "lightblue");

        
        document.getElementById("navText").value = "";
        document.getElementById("navText").focus();


        // When there's a keyup, change the targeted car's (the one with the blue background)
        //      text equal to what's in the textArea
        document.getElementById("navText").addEventListener("keyup", function(event2){
            var desc = document.getElementById("desc--" + tagIndex);
            CarLot.setTextOnBlueElement(event2.target.value);
        });

    };

    oldCarLot.populateDOM = function(cars){

        var output = document.getElementById("cardContainer");
        var textArea = document.getElementById("navText");
        textArea.value = "";

        output.addEventListener("click", CarLot.activateEvents, false);
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

            output.appendChild(card);
        }
    };

    return oldCarLot;
})(CarLot || {});


CarLot.loadInventory(CarLot.receiveInventory);





