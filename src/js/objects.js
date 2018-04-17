
console.log("Loaded Objects");
jsonEvents = `[
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",
        "description":"concert for all ages, ....",
        "name":"concert",
        "isPublic": true,
        "room" : "rmA",
        "type" : "event",
        "attending": []
    },    
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",		
        "description":"concert for all ages, ....",
        "name":"concert 2",
        "isPublic": true,
        "room" : "rmA",
        "type" : "event",
        "attending": []
    },    
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",		
        "description":"concert for all ages, ....",
        "name":"Yet Another Concert",
        "isPublic": true,
        "room" : "rmB",
        "type" : "event",
        "attending": []
    },
    {
        "dateOfEvent":"2018-05-28T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",		
        "description":"something something, ....",
        "name":"party for the partiers",
        "isPublic": true,
        "room" : "rmC",
        "type" : "event",
        "attending": []
    },
    {
        "dateOfEvent":"2018-05-16T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",		
        "description":"why cant I think of any events, ....",
        "name":"I am at a loss",
        "isPublic": true,
        "room" : "rmX",
        "type" : "event",
        "attending": []
    },
    {
        "dateOfEvent":"2018-05-16T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",		
        "description":"why cant I think of any events, ....",
        "name":"I am at a loss #2",
        "isPublic": true,
        "room" : "rmY2",
        "type" : "event",
        "attending": []
    },
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",
        "description": "Piano, Violin",
        "name":"Music Lessons",
        "isPublic": true,
        "room" : "rmZ3",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class",
        "attending": []
    },    
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",		
        "description":"Learn how to use your hands for things other then typing or texting.",
        "name":"Wood Workshop",
        "isPublic": true,
        "room" : "rmY3",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class",
        "attending": []
    },    
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",		
        "description":"This class with teach people how to come up with classes as example",
        "name":"This is a Class",
        "isPublic": true,
        "room" : "rmZ4",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class",
        "attending": []
    },
    {
        "dateOfEvent":"2018-05-29T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",		
        "description":"Everything Tech",
        "name":"Tech Workshop",
        "isPublic": true,
        "room" : "rmB",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class",
        "attending": []
    },
    {
        "dateOfEvent":"2018-05-5T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",		
        "description":"Learn how to weave",
        "name":"Basket Weaving",
        "isPublic": true,
        "room" : "rmC",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class",
        "attending": []
    },
    {
        "dateOfEvent":"2018-05-11T04:21:29.222Z",
        "endOfEvent":"2018-05-30T04:21:29.222Z",		
        "description":"why cant I think of any events, ....",
        "name":"spanish Lessons",
        "isPublic": true,
        "room" : "rmC",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class",
        "attending": []
    }
]`;

var jsonUsers =`[{
                    "name":"Joe",
                    "email":"j@j.com",
                    "password":"123",
                    "type":"User",
                    "attending":["spanish Lessons","Basket Weaving"]
                },{
                    "name":"Sam",
                    "email":"s@s.com",
                    "password":"123",
                    "type":"Admin",
                    "attending":[]
                }]`;

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

function getPersistence(){
    console.log("Get Persistence");
    return new Persistence();
}

class User{
    constructor(user = null, name = "", email ="", password = "", type = "User",attending=[]){
        if(user != null){
            this.email = user.email;
            this.name = user.name;
            this.password = user.password;
            this.type = user.type;
            this.attending = user.attending;
        }else{
            this.name = name;
            this.email = email;
            this.password = password;
            this.type = type;
            this.attending =attending;
        }
    }
}

class Persistence{
    constructor(users = null){
        this.users = [];
        if(users == null){
            if(window.localStorage.getItem("Users") != null){
                this.users = JSON.parse(window.localStorage.getItem("Users"));
            }else{
                var fromJson = JSON.parse(jsonUsers);
                for(var index in fromJson){
                    this.users[index] = new User(fromJson[index]);
                    window.localStorage.setItem("Users", JSON.stringify(this.users));
                }
            }
        }else{
            this.users = users;
        }
    }
    /**
     * Adds the Event to the list and save it.
     * @param {ObjEvent} event 
     */
    registerEvent(event){
        var events = getEvents();
        events[events.length] = event;
        saveEvents(events);
    }
    /**
     * Addeds the attendence of the user and event. saves it.
     * @param {String} userName 
     * @param {String} eventName 
     */
    userEventRegistration(userName,eventName){
        var events = getEvents();
        if(events){
            for(var index in events){
                if(events[index].name == eventName){
                    events[index].attending[events[index].attending.length] = userName;
                    var userIndex = getUserIndex(userName);
                    this.users[userIndex].attending[this.users[userIndex].attending.length] = eventName;
                }
            }
        }
        window.localStorage.setItem("Users", JSON.stringify(this.users));
        window.localStorage.setItem("Events", JSON.stringify(events));
    }
    /**
     * creates a user, adds it to the list, saves the list.
     * @param {String} name 
     * @param {String} email 
     * @param {String} password 
     */
    registerUser(name,email,password){
        var allUsers = JSON.parse(window.localStorage.getItem("Users"));
        for(var index in allUsers){
            this.users[index] = new User(allUsers[index]);
        }
        this.users[this.users.length] = new User(null,name, email,password);
        window.localStorage.setItem("Users", JSON.stringify(this.users));
    }
    /**
     * logs the user in if the passowrd is correct and the user is found.
     * @param {String} name 
     * @param {String} password 
     */
    login(name,password){
        var user = this.getUser(name);
        if(user){
            if(user.password == password){
                window.sessionStorage.setItem("CurrentUser",JSON.stringify(user));
                return true;
            }
        }
        return false;
    }
    /**
     * logs the user out.
     */
    logout(){
        window.sessionStorage.removeItem("CurrentUser");
    }
    /**
     * returns a User if the user is logged in.
     */
    getCurrentUser(){
        var user = JSON.parse(window.sessionStorage.getItem("CurrentUser"));
        return new User(user);
    }

    isLoggedIn(){
        return window.sessionStorage.getItem("CurrentUser") != null;
    }
    isUserAdmin(){
        if(this.isLoggedIn()){
            var user = this.getCurrentUser();
            return user.type == "Admin";
        }
        return false;
    }
    /**
     * gets the user by its name.
     * @param {String} name 
     */
    getUser(name){
        for(var index in this.users){
            if(this.users[index].name == name){
                return new User(this.users[index]);
            }
        }
    }
    getUserIndex(name){
        for(var index in this.users){
            if(this.users[index].name == name){
                return index;
            }
        }
    }
}
class ObjEvent{
    constructor(name = "unknown",description = "",dateOfEvent = new Date(), endOfEvent = new Date(), attending = [], type = "event", room = ""){
        this.dateOfEvent = dateOfEvent;
        this.description = description;
        this.name = name;
        this.isPublic = true;
        this.room = room;
        this.endOfEvent = endOfEvent;
        this.attending = attending;
    }
}

class Calendar{
    constructor(year = 1970, month = 0){
        this.DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.MONTH_NAMES = new Array();
        //this.MONTH_NAMES[0] = "January";
        this.MONTH_NAMES[1] = "February";
        this.MONTH_NAMES[2] = "March";
        this.MONTH_NAMES[3] = "April";
        this.MONTH_NAMES[4] = "May";
        this.MONTH_NAMES[5] = "June";
        this.MONTH_NAMES[6] = "July";
        this.MONTH_NAMES[7] = "August";
        this.MONTH_NAMES[8] = "September";
        this.MONTH_NAMES[9] = "October";
        this.MONTH_NAMES[10] = "November";
        this.MONTH_NAMES[11] = "December";
        this.MONTH_NAMES[12] = "January";		
        this.month = month;
        this.year = year;
        this.date = new Date(year, month - 1, 1);
		if(Calendar.prototype.calendarReference == null){
			Calendar.prototype.calendarReference = this;
		}

    }
    getFirstDay(){
        return this.DAY_NAMES[this.date.getDay()];
    }
    getMonthLength(){
        return (new Date(this.year, this.month, 0)).getDate();
    }
    getCurrentDay(){
        return (new Date()).getDate();
    }
    getCurrentMonth(){
        return (new Date()).getMonth();
    }
    getCurrentYear(){
        return (new Date()).getFullYear();
    }
    getMonthName(month = 0){ // Why is this = 0? Will always return Janaury.
        return this.MONTH_NAMES[month];
    }
    getEventOnDay(day){
        var dayEvents = new Array();
        var indexOf = 0;
        var events = getEvents();
        for(var index in events){
            var date = new Date(events[index].dateOfEvent);
            if(day == date.getDate() && this.year == date.getFullYear() && this.month == date.getMonth()){
                dayEvents[indexOf] = events[index];
                indexOf++;
            }
        }
        return dayEvents;
    }
    getAllEvents(){
        return getEvents();
    }
}