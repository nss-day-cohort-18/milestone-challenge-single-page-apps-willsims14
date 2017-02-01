"use strict";

var CarLot = (function (oldCarLot) {
    var inventory = [];

    oldCarLot.receiveInventory = function(potato){
        inventory = potato;
        console.log("Inventory: ", inventory);
    };

    oldCarLot.activateEvents = function(){
        // Activate all event istener events
        // onClick of a card
        //      - focus textInput listener
        //      - target car description

        // Text input for changing car descrription
        var textArea = document.getElementById("navText");

        // Container
        var cardContainer = document.getElementById("cardContainer");
        cardContainer.addEventListener("click", function(event){
            console.log("Target: ", event.target);
            console.log("Current: ", event.currentTarget);
            console.log("--------------------------------------");

        });

    };
    return oldCarLot;
})(CarLot || {});


CarLot.loadInventory(CarLot.receiveInventory);


