"use strict";

var CarLot = (function (oldCarLot) {
    var inventory = [];

    oldCarLot.receiveInventory = function(potato){
        inventory = potato;
        console.log("Inventory: ", inventory);
    };

    oldCarLot.activateEvents = function(event){

        // Container
        var cardContainer = document.getElementById("cardContainer");
        

        // Text input for changing car descrription
        var textArea = document.getElementById("navText");
        var clickedCard = event.currentTarget;



        // RESET ALL CARD BORDERS HERE


        // Focus text area when user clicks card
        textArea.focus();

        // Call function to set new border/color on clicked card
        CarLot.cardClicked(clickedCard);

        // Listen for text area to receive input
        textArea.addEventListener("keyup", function(event1){

            // If user hits enter, remove focus from text area and
            //      call function to reset border/color to normal style
            if(event1.keyCode ===  13){
                textArea.blur();
                // Set card back to normal
            }else{
                // clicked card's description is set to textArea.value;
            }
        });

    };

    return oldCarLot;
})(CarLot || {});


CarLot.loadInventory(CarLot.receiveInventory);


