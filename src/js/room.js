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

/* preventDefault prevents the normal POST operation from the button submit from working.
   Otherwise the built-in form validation wouldn't work if we went with a regular button submit.
   Call handling method from within anonymous function.
*/
document.getElementById("submitBtn").addEventListener("click", function(event) {event.preventDefault(); if(formID.checkValidity()){setRoomAvailability();} else {alert("Invalid Form");} });

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

function setRoomAvailability() {

	// Migrate this function to core.js I think?
	// Fetch new Calendar instance for year/month of requested new event. 
	// Get events from day. 
	// Compare start/end times of events versus new event
	// alter room availability (disabling room, coloring red, etc.)
	let startDate = document.getElementById("startDate");
	let endDate = document.getElementById("endDate");	
	let startDateObj = new Date(startDate.value);
	let endDateObj = new Date(endDate.value);	
	console.log(startDateObj.getFullYear());
	console.log(startDateObj.getMonth());
	let calendar = new Calendar(startDateObj.getFullYear(), startDateObj.getMonth()+1);
	console.log(calendar.getEventOnDay(10));
	
	alert("Start Date Obj:"+ startDateObj + "\n\n" + "End Date Obj: " + endDateObj);
	
	return calendar; // For console test purposes
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