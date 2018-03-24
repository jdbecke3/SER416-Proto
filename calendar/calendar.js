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
        if(dayNumber ==currentDay && currentMonth == cal.month){
            var activeSpan = document.createElement("div");
            activeSpan.className = "active";
            activeSpan.innerHTML = dayNumber;
            dayLI.appendChild(activeSpan);
        }else{
            dayLI.innerHTML = dayNumber;
        }
        var events_Of_Day = cal.getEventOnDay(dayNumber);
        console.log("Number of Events: " + events_Of_Day.length);
        for(var index in events_Of_Day){
            console.log("Event: " + JSON.stringify(events_Of_Day[index]));
            var eventSpan = document.createElement("div");
            eventSpan.className = "event";
            eventSpan.innerHTML = events_Of_Day[index].name;
            eventSpan.addEventListener("click",function(){
                console.log("Click Event");
            })
            dayLI.appendChild(document.createElement("br"));
            dayLI.appendChild(eventSpan);
        }
        dayLI.events = events_Of_Day;
        dayLI.addEventListener("click",function(evnt){
            console.log("click me " + evnt.target.innerHTML);
            console.log("Date Clicked There are "+evnt.target.events.length+" Events for this day");
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