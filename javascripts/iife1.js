"use strict";

var CarLot = (function () {
  var inventory = [];
	return {
    	loadInventory: function (callback1) {
      		var inventoryLoader = new XMLHttpRequest();

      		inventoryLoader.open("GET", "inventory.json");
      		inventoryLoader.send();

      		inventoryLoader.addEventListener("load", function (event) {
                // Gets the value of the only object in the JSON (which is the array of cars)
      			var data = Object.values(JSON.parse(event.target.responseText))[0];
      			inventory = data;
            CarLot.populateDOM(inventory);
      			callback1(inventory);
            });	
        },
        getInventory: function(){
            return inventory;
        }
    };
})(CarLot || {});


