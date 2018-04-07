
//From : https://stackoverflow.com/questions/814613/how-to-read-get-data-from-a-url-using-javascript
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
    var jsonEvent = getURLParams("jsonEvent");
    jsonEvent = decodeURIComponent(jsonEvent);
    console.log("Event: " + jsonEvent);
    var event = JSON.parse(jsonEvent);
    eventNameDiv.innerHTML = event.name;
    eventDescDiv.innerHTML = event.description;
    var startDate = new Date(event.dateOfEvent);
    var cal = new Calendar(2018,startDate.getDay());
    
    eventStartTimeDiv.innerHTML = formatDate(startDate);
}

startEventPageJS();