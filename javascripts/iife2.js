"use strict";

var CarLot = (function (oldCarLot) {
    var inventory = [];

    oldCarLot.receiveInventory = function(potato){
        inventory = potato;
        console.log("Inventory: ", inventory);
    };

    oldCarLot.activateEvents = function(event){

        var tagIndex = event.target.parentNode.tag;

        var innerCard = document.getElementById("innerCard--" + tagIndex);

        CarLot.resetCardStyles();
        CarLot.styleClickedCard(innerCard, "lightblue");

        textArea.value = "";
        textArea.focus();

        // When there's a keyup, change the targeted car's (the one with the blue background)
        //      text equal to what's in the textArea
        textArea.addEventListener("keyup", function(event2){
            var desc = document.getElementById("desc--" + tagIndex);
            setTextOnBlueElement(event2.target.value);
        }, false)

    };
    return oldCarLot;
})(CarLot || {});


CarLot.loadInventory(CarLot.receiveInventory);





