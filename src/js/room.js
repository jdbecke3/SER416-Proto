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

	// TODO: Add validation for when endDate < startDate, etc.
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
	console.log(startDateObj.getDate());
	
	let calendar = new Calendar(startDateObj.getFullYear(), startDateObj.getMonth());
	console.log(calendar.getEventOnDay(29));
	
	// Parse JSON. iterate through json.dateOfEvent for each event, fetch startTime and endTime and perform comparisons to see if it's okay
	let parsedEvents = calendar.getEventOnDay(startDateObj.getDate());
	console.log("TEST:"+calendar.getEventOnDay(startDateObj.getDate()));
	//console.log(parsedEvents[0].dateOfEvent);
	
	// If there is a conflict, Red/lock the room. 
	/*
		`if newEndTime > existingEventStartTime && newEndTime < existingEventEndTime`
		`if newStartTime > existingEventStartTime && newStartTime < existingEventEndTime`
		`if newStartTime < existingStartTime && newEndTime > existingEventStartTime`
		`if newStartTime === newEndtime`....
	*/
	let hasConflict = false;
	
	for(var i=0;i<parsedEvents.length;i++){
		let existingStart = new Date(parsedEvents[i].dateOfEvent);
		let existingEnd = new Date(parsedEvents[i].dateOfEvent);
		existingEnd.setHours(existingEnd.getHours()+1);
		console.log(existingStart + " " + existingEnd);
		
		alert("Testing: " + startDateObj + " end "+ endDateObj + "\n\n Against: \n\n" + existingStart + " endold " + existingEnd); 
		
		if(endDateObj.getTime() > existingStart && endDateObj.getTime() < existingEnd){
			hasConflict = true;
			alert("Conflict 1!");
			
		} 
		else if (startDateObj.getTime() > existingStart && startDateObj.getTime() < existingEnd){
			hasConflict = true;
			alert("Conflict 2!");
			
		}
		else if (startDateObj.getTime() < existingStart && endDateObj.getTime() > existingStart){
			hasConflict = true;
			alert("Conflict 3!");
		}
		else {
			alert("No conflict");
		}
		
		if(hasConflict) {
			setRoomRed(parsedEvents[i]);
		}
		
		// TODO: IF any conflict, block room associated with the existing event.
		
	}
			
	alert("Start Date Obj:"+ startDateObj + "\n\n" + "End Date Obj: " + endDateObj);
	
	return calendar; // For console test purposes
}

function setRoomRed(eventObj) {

	let room = document.getElementById(eventObj.room);
	let roomText = document.getElementById(eventObj.room+"Text");
	room.style.fill = "red";
	
	room.removeEventListener("mouseover", onHover);
	room.removeEventListener("mouseout", offHover);
	
	roomText.removeEventListener("mouseover", onHover);
	roomText.removeEventListener("mouseout", offHover);
	
	room.removeEventListener("click", processEvent);
	roomText.removeEventListener("click", processEvent);	
	
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