var CarLot = (function (oldCarLot) {
    var inventory = [];

    oldCarLot.cardClicked = function(card){
        console.log("Card Clicked: ", card);

        var cardIndex = (card.id).substring(6, 7);
        var innerCard = document.getElementById("innerCard--" + cardIndex);

        innerCard.style.border = "4px solid black";
    };



    return oldCarLot;
})(CarLot || {});