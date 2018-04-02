
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


/*############ OnClick Events ################*/
rmA.addEventListener("click", (event) => {processEvent(event);}, false);
rmAText.addEventListener("click", (event) => {processEvent(event);}, false);

rmB.addEventListener("click", (event) => {processEvent(event);}, false);
rmBText.addEventListener("click", (event) => {processEvent(event);}, false);

rmC.addEventListener("click", (event) => {processEvent(event);}, false);
rmCText.addEventListener("click", (event) => {processEvent(event);}, false);

rmX.addEventListener("click", (event) => {processEvent(event);}, false);
rmXText.addEventListener("click", (event) => {processEvent(event);}, false);

for(var i=1;i<=4;i++){
	
	let refYText = document.getElementById("rmY"+i+"Text");
	let refZText = document.getElementById("rmZ"+i+"Text");
	let refY = document.getElementById("rmY"+i);
	let refZ = document.getElementById("rmZ"+i);
	
	refZ.addEventListener("click", (event) => {processEvent(event);}, false);		
	refZText.addEventListener("click", (event) => {processEvent(event);}, false);

	refZText.addEventListener("mouseover", (event) => {onHover(event);}, false);
	refZText.addEventListener("mouseout", (event) => {offHover(event);}, false);
	refZ.addEventListener("mouseover", (event) => {onHover(event);}, false);
	refZ.addEventListener("mouseout", (event) => {offHover(event);}, false);	
	
	refY.addEventListener("click", (event) => {processEvent(event);}, false);
	refYText.addEventListener("click", (event) => {processEvent(event);}, false);
	
	refY.addEventListener("mouseover", (event) => {onHover(event);}, false);
	refY.addEventListener("mouseout", (event) => {offHover(event);}, false);
	refYText.addEventListener("mouseover", (event) => {onHover(event);}, false);
	refYText.addEventListener("mouseout", (event) => {offHover(event);}, false);	
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
	
	alert("ROOM ID: " + eventObj.target.id + "\n\nClicking would prompt a details dialog box to appear for completing the task...");
	let refId = eventObj.target.id;
	let isText = refId.indexOf("Text");
	
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
