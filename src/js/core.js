
var rmAText = document.getElementById("rmAText");

rmAText.addEventListener("mouseover", onHover, false);
rmAText.addEventListener("mouseout", offHover, false);

// For hovering over the text and changing the background of a separate element within the .svg doc
// This can only be achieved with JS, not CSS since the order of the elements being manipulated are reversed. 
// Shifting them in the .svg would make the text behind the rectangle. 

function onHover () {

	var rmA = document.getElementById("rmA");
	
	rmA.style.fill = "#b3ffb3";
	
	
}

function offHover () {

	var rmA = document.getElementById("rmA");
	
	rmA.style.fill = "#00FF00";
	
	
}
