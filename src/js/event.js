
//From : https://stackoverflow.com/questions/814613/how-to-read-get-data-from-a-url-using-javascript
var jsonEvent = null;
function getURLParams(name){
    var url = window.location.search;
    var num = url.search(name);
    var namel = name.length;
    var frontlength = namel+num+1; //length of everything before the value 
    var front = url.substring(0, frontlength);  
    url = url.replace(front, "");  
    num = url.search("&");
  
   if(num>=0) return url.substr(0,num); 
   if(num<0)  return url;             
  }
  function formatDate(date){
    var time = "am";
    var h = date.getHours();
    if(h > 12){
        time = "pm";
        h = h-12;
    }
    return date.getDate()+"/"+date.getMonth() + " " + h + ":" + date.getMinutes() + " " + time
  }

function startEventPageJS(){
    var eventCont = document.getElementById("eventContainer");
    var eventNameDiv = document.getElementById("eventName");
    var eventDescDiv = document.getElementById("eventDesc");
    var eventStartTimeDiv = document.getElementById("eventStartTime");
    var eventEndTimeDiv = document.getElementById("eventEndTime");
    jsonEvent = getURLParams("jsonEvent");
    jsonEvent = decodeURIComponent(jsonEvent);
    console.log("Event: " + jsonEvent);
    var event = JSON.parse(jsonEvent);
    eventNameDiv.innerHTML = event.name;
    eventDescDiv.innerHTML = event.description;
    var startDate = new Date(event.dateOfEvent);
    var cal = new Calendar(2018,startDate.getDay());
    
    eventStartTimeDiv.innerHTML = formatDate(startDate);
}

function attend(){
    var persis = getPersistence();
    if(persis.isUserLoggedIn()){
        var currentUser = persis.getCurrentUser();

    }else{

    }
}

startEventPageJS();

var nameDiv = document.getElementById("modelName");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openModel(element) {
    description.innerHTML = element.event.description;
    var date = new Date(element.event.dateOfEvent);
    var h = date.getHours();
    var m = date.getMinutes();
    if(h > 12){
        timeDiv.innerHTML = (h -12) + ":" +m + " PM";
    }else{
        timeDiv.innerHTML = (h -12) + ":" +m + " AM";
    }
    
    nameDiv.innerHTML = element.event.name;
    if(element.event.type == "event"){
        buttonPopup.setAttribute("value", "Go To This Event Page");
    }else{
        buttonPopup.setAttribute("value", "Go To This Class Page");
    }
    buttonPopup.selectedEvent = element.event;
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display = "none";
    }
}