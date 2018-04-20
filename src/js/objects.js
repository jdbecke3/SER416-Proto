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
    constructor(){
        if(getUsers() == null){
            var fromJson = JSON.parse(jsonUsers);
            saveUsers(fromJson);
        }
        if(getEvents() == null){
            var fromJson = JSON.parse(jsonEvents);
            saveEvents(fromJson);
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
        var users = getUsers();
        if(events){
            for(var index in events){
                if(events[index].name == eventName){
                    events[index].attending[events[index].attending.length] = userName;
                    var userIndex = this.getUserIndex(userName);
                    users[userIndex].attending[users[userIndex].attending.length] = eventName;
                }
            }
        }
        saveUsers(users);
        saveEvents(events);
    }
    /**
     * creates a user, adds it to the list, saves the list.
     * @param {String} name 
     * @param {String} email 
     * @param {String} password 
     */
    registerUser(name,email,password){
        var users = getUsers();
        users[users.length] = new User(null,name, email,password);
        saveUsers(users);
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
        
        user = new User(user);
        return user;
    }
    isUserAttending(username,eventname){
        var events = getEvents();
        var user = this.getUser(username);
        if(user){
            return user.attending.includes(eventname);
        }
        return false;
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
        var users = getUsers();
        for(var index in users){
            if(users[index].name == name){
                return new User(users[index]);
            }
        }
    }
    getUserIndex(name){
        var users = getUsers();
        for(var index in users){
            if(users[index].name == name){
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
        this.type = type;
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
        if(getUsers() == null){
            var fromJson = JSON.parse(jsonUsers);
            saveUsers(fromJson);
        }
        if(getEvents() == null){
            var fromJson = JSON.parse(jsonEvents);
            saveEvents(fromJson);
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

class CalendarFilter{
    constructor(jsonFilter = null,mostStartAfterDate = null, mostEndBeforeDate = null, maxLengthInTime=-1, type = null){
        if(jsonFilter == null){
            this.mostStartAfterDate = mostStartAfterDate;
            this.mostEndBeforeDate = mostEndBeforeDate;
            this.maxLengthInTime = maxLengthInTime;
            this.type = type;
        }else{
            this.mostStartAfterDate = jsonFilter.mostStartAfterDate;
            this.mostEndBeforeDate = jsonFilter.mostEndBeforeDate;
            this.maxLengthInTime = jsonFilter.maxLengthInTime;
            this.type = jsonFilter.type;
        }
    }

    filter(event){
        if(this.mostStartAfterDate != null){
            var startDate = new Date(event.dateOfEvent);
            if(startDate.getTime() < mostStartAfterDate.getTime()){
                return true;
            }
        }
        if(this.mostEndBeforeDate != null){
            var startDate = new Date(event.dateOfEvent);
            if(startDate.getTime() > mostEndBeforeDate.getTime()){
                return true;
            }
        }
        if(this.length != -1){
            var startDate = new Date(event.dateOfEvent);
            var endDate = new Date(event.endOfEvent);
            if( endDate.getTime() - startDate.getTime() < this.maxLengthInTime){
                return true;
            }
        }
        if(this.type != null){
            if( this.type != event.type){
                return true;
            }
        }
        return false;
    }
}
console.log("Loaded Objects");