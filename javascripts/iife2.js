"use strict";

var CarLot = (function (oldCarLot) {
    var inventory = [];

    oldCarLot.receiveInventory = function(potato){
        inventory = potato;
        console.log("Inventory: ", inventory);
    };

    oldCarLot.activateEvents = function(event0){
        // Text input for changing car descrription
        let textArea = document.getElementById("navText");

        let cardIndex = (event0.currentTarget.id).substring(6, 7);

        let innerCard = document.getElementById("innerCard--" + cardIndex);


        textArea.value = "";

        // Focus text area when user clicks card
        textArea.focus();

        // Reset all cards to original styles before styling the clicked card
        CarLot.resetCardStyles();

        // Call function to set new border/color on clicked card
        CarLot.styleClickedCard(innerCard, "lightblue");

        // Listen for text area to receive input
        textArea.addEventListener("keyup", listen);

                // When focus is lost from text area, set new bio
        textArea.addEventListener("focusout", function(event2){
            console.log("FOCUSED OUT");



        });


    };

    return oldCarLot;
})(CarLot || {});


CarLot.loadInventory(CarLot.receiveInventory);



function listen(event){
    "use strict";



}

