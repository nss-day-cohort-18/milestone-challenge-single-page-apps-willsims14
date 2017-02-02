"use strict";








function populateDOM(cars){
    var output = document.getElementById("cardContainer");

    console.log("Pop DOM", cars);
    console.log("Length: ", cars.length);

    for(var i = 0; i < cars.length; i++){

        // <section> Entire Card w/ bootstrap columns
        var card = document.createElement("SECTION");
            card.id = "card--" + i;
            card.className = "col-sm-6 col-md-4 card";

        // <div> Inner card w/o bootstrap for styling
        var innerCard = document.createElement("DIV");
            innerCard.id = "innerCard--" + i;
            innerCard.className = "innerCard row";

        // <h3> Element for car's name
        var carPrice = " ($" + cars[i].price + ")";
        var carNameElement = document.createElement("H3");
            carNameElement.className = "cardHeader";
            carNameElement.innerHTML = cars[i].make + " " + cars[i].model + " " + carPrice.small();
            

        // <div> Element to hold <img> element 
        var imageContainerElement = document.createElement("DIV");
            imageContainerElement.className = "imageContainer";
            imageContainerElement.innerHTML =  `<img class="carImage" src="${cars[i].imageSource}">`;

        // <span> Element to hold the car's year
        var yearElement = document.createElement("SPAN");
            yearElement.innerHTML = cars[i].year.bold();
            

        // <span> Element to hold car's description
        var descriptionElement = document.createElement("SPAN");
            descriptionElement.innerHTML = cars[i].description;
            descriptionElement.id = "desc--" + i;
            descriptionElement.className = "notImage";
            descriptionElement.style.marginLeft = "10%";
            descriptionElement.style.marginRight = "10%";
            
        innerCard.appendChild(carNameElement); 
        innerCard.appendChild(yearElement);
        innerCard.appendChild(imageContainerElement);  
        innerCard.appendChild(descriptionElement);

        card.appendChild(innerCard);

        card.addEventListener("click", CarLot.activateEvents);

        output.appendChild(card);
    }}