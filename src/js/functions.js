function saveEvents(events){
    console.log("save Events");
    window.localStorage.setItem("Events",JSON.stringify(events));
}
function getEvents(){
    var events = null;
    if(window.localStorage.getItem("Events") !== null){
        var json = window.localStorage.getItem("Events");
        events = JSON.parse(json);
    }else{
        events = JSON.parse(jsonEvents);
        saveEvents(events);
    }
    console.log("Got Events ("+events.length+")");
    return events;
}

function getUsers(){
    if(window.localStorage.getItem("Users") != null){
        var jsonUsers = JSON.parse(window.localStorage.getItem("Users"));
        var users = [];
        for(var index in jsonUsers){
            users[index] = new User(jsonUsers[index]);
        }
        return users;
    }else{
        return null;
    }

}

function saveUsers(users){
    window.localStorage.setItem("Users",JSON.stringify(users));
}

function getPersistence(){
    console.log("Get Persistence");
    return new Persistence();
}

function getCalendar(){
    console.log("Get Calendar");
    return new Calendar();
}


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


setTimeout(function(){
var classesLink = document.getElementById("classesLink");
classesLink.addEventListener("click", function(){
        var filter = new CalendarFilter();
        //fitler out events
        filter.type = "class";
        window.sessionStorage.setItem("CalendarFilter",JSON.stringify(filter));
        console.log("Clicked Classes");
        window.location.href = window.location.href = "calendar.html";
    });
},1000);
console.log("Loaded Functions");