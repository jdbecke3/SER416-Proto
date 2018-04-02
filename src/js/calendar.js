var cal = new Calendar(2018,(new Date()).getMonth() + 1);

getEvents();

function updateCalendar(){
    var daysUL = document.getElementById("days");
    var currentDay = cal.getCurrentDay();
    var currentMonth = cal.getCurrentMonth() + 1;
    var currentSelectedMonthElement = document.getElementById("currentSelectedMonth");
    currentSelectedMonthElement.innerHTML = cal.getMonthName(cal.month-1) + "<br><span style='font-size:18px'>"+cal.year+"</span>";
    var numberOfDays = cal.getMonthLength();
    daysUL.innerHTML = "";
    for(var dayNumber = 1; dayNumber <= numberOfDays; dayNumber++){
        var dayLI = document.createElement("li");
        dayLI.id = "day_"+dayNumber;
        if(dayNumber ==currentDay && currentMonth == cal.month){
            var activeSpan = document.createElement("div");
            activeSpan.className = "active";
            activeSpan.innerHTML = dayNumber;
            dayLI.appendChild(activeSpan);
        }else{
            dayLI.innerHTML = dayNumber;
        }
        var events_Of_Day = cal.getEventOnDay(dayNumber);
        if(events_Of_Day.length > 0){
            dayLI.setAttribute("data-toggle","tooltip");
            dayLI.setAttribute("title","show all");
        }
        // ADD Events to Calendar
        for(var index in events_Of_Day){
            var eventDiv = document.createElement("div");
            eventDiv.event = events_Of_Day[index];
            if(index % 2 == 0){
                eventDiv.className = eventDiv.event.type+"_even";
            }else{
                eventDiv.className = eventDiv.event.type+"_odd";
            }
            eventDiv.innerHTML = events_Of_Day[index].name;
            eventDiv.addEventListener("click",function(evnt){
                openModel(evnt.target);
            })
            dayLI.appendChild(eventDiv);
        }
        dayLI.events = events_Of_Day;
        dayLI.addEventListener("click",function(evnt){
            console.log("click me " + evnt.target.innerHTML);
            if(evnt.target.id.includes("day")){
                console.log("Date Clicked There are "+evnt.target.events.length+" Events for this day");
            }
        });
        daysUL.appendChild(dayLI);
    }
}

function next(){
    console.log("Going next from ("+cal.month+") TO ("+(cal.month = cal.month + 1)+")" );
    
    if(cal.month == 13){
        cal.month = 1;
        cal.year = cal.year + 1;
    }
    updateCalendar();
}
function prev(){
    console.log("Going next from ("+cal.month+") TO ("+(cal.month = cal.month - 1)+")" );
    
    if(cal.month == 0){
        cal.month = 12;
        cal.year = cal.year - 1;
    }
    updateCalendar();
}
updateCalendar();

// Get the modal
var modal = document.getElementById('myModal');
var description = document.getElementById("modelDescription");
var timeDiv = document.getElementById("modelTime");
var buttonPopup = document.getElementById("popupButton");
buttonPopup.addEventListener("click",function(evnt){
    window.location.href = window.location.href.replace("calendar","event") + '?jsonEvent=' + JSON.stringify(evnt.target.selectedEvent);
});
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