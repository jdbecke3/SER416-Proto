
var rmAText = document.getElementById("rmAText");
var rmA = document.getElementById("rmA");

var rmCText = document.getElementById("rmCText");
var rmC = document.getElementById("rmC");

var rmX = document.getElementById("rmX");
var rmXText = document.getElementById("rmXText");

var rmB = document.getElementById("rmB");
var rmBText = document.getElementById("rmBText");

/*############ MouseOver && MouseOut ################*/
rmAText.addEventListener("mouseover", onHover, false);
rmAText.addEventListener("mouseout", offHover, false);
rmA.addEventListener("mouseover", onHover, false);
rmA.addEventListener("mouseout", offHover, false);

rmC.addEventListener("mouseover", onHover, false);
rmC.addEventListener("mouseout", offHover, false);
rmCText.addEventListener("mouseover", onHover, false);
rmCText.addEventListener("mouseout", offHover, false);

rmX.addEventListener("mouseover", onHover, false);
rmX.addEventListener("mouseout", offHover, false);
rmXText.addEventListener("mouseover", onHover, false);
rmXText.addEventListener("mouseout", offHover, false);

rmBText.addEventListener("mouseover", onHover, false);
rmBText.addEventListener("mouseout", offHover, false);
rmB.addEventListener("mouseover", onHover, false);
rmB.addEventListener("mouseout", offHover, false);


/*Alternative method if needing to pass args in EventListeners below, but downside is you can't remove the action listener because function is anonymous*/
//rmA.addEventListener("click", (event) => {processEvent(event);}, false); 

/*############ OnClick Events ################*/
rmA.addEventListener("click", processEvent, false);
rmAText.addEventListener("click", processEvent, false);

rmB.addEventListener("click", processEvent, false);
rmBText.addEventListener("click", processEvent, false);

rmC.addEventListener("click", processEvent, false);
rmCText.addEventListener("click", processEvent, false);

rmX.addEventListener("click", processEvent, false);
rmXText.addEventListener("click", processEvent, false);

for(var i=1;i<=4;i++){
	
	let refYText = document.getElementById("rmY"+i+"Text");
	let refZText = document.getElementById("rmZ"+i+"Text");
	let refY = document.getElementById("rmY"+i);
	let refZ = document.getElementById("rmZ"+i);
	
	refZ.addEventListener("click", processEvent, false);		
	refZText.addEventListener("click", processEvent, false);

	refZText.addEventListener("mouseover", onHover, false);
	refZText.addEventListener("mouseout", offHover, false);
	refZ.addEventListener("mouseover", onHover, false);
	refZ.addEventListener("mouseout", offHover, false);	
	
	refY.addEventListener("click", processEvent, false);
	refYText.addEventListener("click", processEvent, false);
	
	refY.addEventListener("mouseover", onHover, false);
	refY.addEventListener("mouseout", offHover, false);
	refYText.addEventListener("mouseover", onHover, false);
	refYText.addEventListener("mouseout", offHover, false);	
}

//(event) => {processEvent(event);}
// TODO: Sample test collection of Events on dates 

// TODO: Rolling-activation of links:

	// Date
	// Start Time
	// End Time
	// Category
	


// For hovering over the text and changing the background of a separate element within the .svg doc
// This can only be achieved with JS, not CSS since the order of the elements being manipulated are reversed. 
// Shifting them in the .svg would make the text behind the rectangle. 

function onHover (evt) {
	var refId = evt.target.id;
	var isText = refId.indexOf("Text");
	
	if(isText != -1){
		console.log("Text");
		refId = refId.substring(0, isText);
		console.log("new ref:"+refId);;
	}
	
	var ref = document.getElementById(refId);
	ref.style.fill = "#b3ffb3";
	
	
}

function offHover (evt) {

	var refId = evt.target.id;
	var isText = refId.indexOf("Text");
	
	if(isText != -1){
		console.log("Text");
		refId = refId.substring(0, isText);
		console.log("new ref:"+refId);;
	}
	var ref = document.getElementById(refId);
	
	ref.style.fill = "#00FF00";
	
	
}

function processEvent(eventObj) {
	eventObj = window.event;
	//alert("ROOM ID: " + eventObj.target.id + "\n\nClicking would prompt a details dialog box to appear for completing the task...");
	
	let refId = eventObj.target.id;
	openModel(eventObj.target);
	
	let isText = refId.indexOf("Text");
	
	// Display Modal:
	
	
	
	if(isText != -1){
		console.log("Text");
		refId = refId.substring(0, isText);
		console.log("new ref:"+refId);;
	}
	console.log("\n\nHERE:"+refId);
	
	/*NEEDED VARS:
	
		- startDate/Time
		- endDate/Time
		- Title
		- Type (Class, Single Event)
		- Category
		- 
	
	*/
	
	// Prompt Pop-Up window to provide more info for event 
		
	// Pass to createEvent function 
		// Fills in information given already
		// Prompts pop-up to provide more info.
	
}

// Get the modal
var buttonPopup = document.getElementById("popupButton");
buttonPopup.addEventListener("click",function(evnt){
    window.sessionStorage.setItem("selectedEvent",JSON.stringify(evnt.target.selectedEvent));
    window.location.href = window.location.href.replace("calendar","event");
});
var nameDiv = document.getElementById("modelName");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
function openModel(element) {
	// TODO: Re-implement conditional on final submission. Leave for testing.
	//if(isValid){ // If global var in room.js isValid indicating form submitted successfully....
		var modal = document.getElementById('myModalHost');
		console.log(element.id);
		modal.style.display = "block";
		document.getElementById("rmName").innerHTML = element.id;
		
		let startTimeModal = document.getElementById("startTimeModal");
		let endTimeModal = document.getElementById("endTimeModal");
		
		startTimeModal.innerHTML = startDate.value;
		endTimeModal.innerHTML = endDate.value;

		
	//}// else {
		//alert("Please Enter correct Start and End Dates");
///	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";	
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	var modal = document.getElementById('myModalHost');
	
	

	console.log(event.target);
    if (event.target.id == 'myModalHost' || event.target.id == "closeBtn"){
        modal.style.display = "none";
    }
	
	if (event.target.id == 'bath'){
		if(!document.getElementById("tltip")){
			let tooltip = document.createElement("span");
			let tooltipDiv = document.getElementById("tooltip")
			tooltip.innerHTML = "Test!";
			//tooltip.className = "tooltiptext";
			tooltip.id = "tltip";
			event.target.appendChild(tooltip);
			tooltip.style.display = "block";
			tooltip.visibility = true;
		}
	}
}






