/*
* Author(s): Jacob Leonard, 
* Purpose: Provides Room Object and Room Collection to handle Room availability within Room Reservation System.
*          When user seeks availability, a collection of the rooms will be returned to RRS where a method will fetch the 
*		   events on the chosen date and iterate through this EVENTS collection, comparing the desired time of the new event
*		   versus the events. IF CONFLICT: fetch Room Object by ID (comparing against current Events), make availability false
*		   
*		   Helps provide more flexible control and event-independent variables pertaining to the status of the room itself (e.g., is it out for maintenance?);
*
*To Test: Launch home.html, enter console and enter: var roomMap = RoomManager() and test by entering a key of any room, say, `roomMap['rmA'];` -- Note will change to class later. 
*/

var formID = document.getElementById("form");
document.getElementById("submitBtn").addEventListener("click", function(event) {event.preventDefault(); if(formID.checkValidity()){testFunc();} else {alert("Invalid Form");} });

// Integrate as Class 
function Room(roomID, isAvailable) {

	this.roomID = roomID;
	this.isAvailable = false;
	this.availableItems = {}; // For implementing equipment availability in certain rooms. 

}

// Integrate as Class 
function RoomManager () {

	var listOfRooms = Array.from(document.getElementsByClassName("rms")); // Converting from NodeList to Array
	var roomMap = {};
	
	listOfRooms = pruneRoomText(listOfRooms);
	
	for(var i=0;i<listOfRooms.length;i++){
		let id = listOfRooms[i].id;	
		var newRoom = new Room(id, false);
		roomMap[id] = newRoom;
	}
	
	return roomMap;
}

function testFunc() {

	var startDate = document.getElementById("startDate");
	var endDate = document.getElementById("endDate");

	var startDateObj = new Date(startDate.value);
	var endDateObj = new Date(endDate.value);
	
	alert("Start Date Obj:"+ startDateObj + "\n\n" + "End Date Obj: " + endDateObj);
	
}

// Likely Antiquated helper function
function pruneRoomText(listOfRooms) {

	for(var i=0;i<listOfRooms.length;i++){
		let refId = listOfRooms[i].id;
		let isText = refId.indexOf("Text");
		console.log(refId);
		if(isText != -1){
			console.log("Removing Text in Array...");
			console.log(typeof(listOfRooms));
			listOfRooms.splice(i,1);
		}
	}
	return listOfRooms;
}