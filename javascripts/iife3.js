"use strict";

var CarLot = (function (oldCarLot) {
    var inventory = [];

    oldCarLot.styleClickedCard = function(card, color){
        var textArea = document.getElementById("navText");
        // textArea.tag = card.id;

        card.style.border = "4px solid black";
        card.style.backgroundColor = color;

    };

    oldCarLot.resetCardStyles = function(){
        var cardContainer = document.getElementById("cardContainer");
        var children = cardContainer.childNodes;

        for(var i = 0; i < children.length; i++){
            children[i].childNodes[0].style.border = "2px solid black";
            children[i].childNodes[0].style.backgroundColor = "lightyellow";

        }
    };

    oldCarLot.setTextOnBlueElement = function(text){

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
    };

    return oldCarLot;
})(CarLot || {});