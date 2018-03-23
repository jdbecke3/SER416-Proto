
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
}

var cal = new Calendar(2018,(new Date()).getMonth() + 1);

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
            dayLI.innerHTML = "<span class='active'>"+dayNumber+"</span>";
        }else{
            dayLI.innerHTML = dayNumber;
        }
        dayLI.addEventListener("click",function(evnt){
            console.log("click me " + evnt.target.innerHTML);
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