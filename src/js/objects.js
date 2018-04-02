
console.log("Loaded Objects");
jsonEvents = `[
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "description":"concert for all ages, ....",
        "name":"concert",
        "isPublic": true,
        "room" : "Concert Hall",
        "type" : "event"
    },    
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "description":"concert for all ages, ....",
        "name":"concert 2",
        "isPublic": true,
        "room" : "Concert Hall",
        "type" : "event"
    },    
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "description":"concert for all ages, ....",
        "name":"Yet Another Concert",
        "isPublic": true,
        "room" : "Concert Hall",
        "type" : "event"
    },
    {
        "dateOfEvent":"2018-05-28T04:21:29.222Z",
        "description":"something something, ....",
        "name":"party for the partiers",
        "isPublic": true,
        "room" : "Party Room",
        "type" : "event"
    },
    {
        "dateOfEvent":"2018-05-16T04:21:29.222Z",
        "description":"why cant I think of any events, ....",
        "name":"I am at a loss",
        "isPublic": true,
        "room" : "Basement",
        "type" : "event"
    },
    {
        "dateOfEvent":"2018-05-16T04:21:29.222Z",
        "description":"why cant I think of any events, ....",
        "name":"I am at a loss #2",
        "isPublic": true,
        "room" : "Basement",
        "type" : "event"
    },
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "description": "Piano, Violin",
        "name":"Music Lessons",
        "isPublic": true,
        "room" : "Room 1",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class"
    },    
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "description":"Learn how to use your hands for things other then typing or texting.",
        "name":"Wood Workshop",
        "isPublic": true,
        "room" : "Concert Hall",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class"
    },    
    {
        "dateOfEvent":"2018-05-30T04:21:29.222Z",
        "description":"This class with teach people how to come up with classes as example",
        "name":"This is a Class",
        "isPublic": true,
        "room" : "Room 1",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class"
    },
    {
        "dateOfEvent":"2018-05-29T04:21:29.222Z",
        "description":"Everything Tech",
        "name":"Tech Workshop",
        "isPublic": true,
        "room" : "Room 1",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class"
    },
    {
        "dateOfEvent":"2018-05-5T04:21:29.222Z",
        "description":"Learn how to weave",
        "name":"Basket Weaving",
        "isPublic": true,
        "room" : "Room 2",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class"
    },
    {
        "dateOfEvent":"2018-05-11T04:21:29.222Z",
        "description":"why cant I think of any events, ....",
        "name":"spanish Lessons",
        "isPublic": true,
        "room" : "Room 2",
        "teacher" : "Ricky Boobie",
        "max_students" : 50,
        "type" : "class"
    }
]`;
function getEvents(){
    var events = JSON.parse(jsonEvents);
    //console.log(JSON.stringify(events[0]));
    return events;
}
class ObjEvent{
    constructor(name = "unknown",description = "",dateOfEvent = new Date()){
        this.dateOfEvent = dateOfEvent;
        this.description = description;
        this.name = name;
        this.isPublic = true;
        this.room = "unkown";
    }
}

class Calendar{
    constructor(year = 1970, month = 0){
        this.DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.MONTH_NAMES = new Array();
        this.MONTH_NAMES[0] = "January";
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
        this.month = month;
        this.year = year;
        this.date = new Date(year, month - 1, 1);
        this.events = getEvents();

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
    getMonthName(month = 0){
        return this.MONTH_NAMES[month];
    }
    getEventOnDay(day){
        var dayEvents = new Array();
        var indexOf = 0;
        for(var index in this.events){
            var date = new Date(this.events[index].dateOfEvent);
            if(day == date.getDate() && this.year == date.getFullYear() && this.month == date.getMonth()){
                dayEvents[indexOf] = this.events[index];
                indexOf++;
            }
        }
        return dayEvents;
    }
}