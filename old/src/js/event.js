
var jsonEvent = window.sessionStorage.getItem("selectedEvent");
window.sessionStorage.removeItem("selectedEvent");
var persistence = getPersistence();
var pupup = document.getElementById('myModal'); 
var closePopup = document.getElementsByClassName("close")[0];

function startEventPageJS(){
    var eventCont = document.getElementById("eventContainer");
    var eventNameDiv = document.getElementById("eventName");
    var eventDescDiv = document.getElementById("eventDesc");
    var eventStartTimeDiv = document.getElementById("eventStartTime");
    var eventEndTimeDiv = document.getElementById("eventEndTime");
    var event = JSON.parse(jsonEvent);
    eventNameDiv.innerHTML = event.name;
    eventDescDiv.innerHTML = event.description;
    
    var startDate = new Date(event.dateOfEvent);
    var endDate = new Date(event.endOfEvent);
    var cal = new Calendar(2018,startDate.getDay());
    
    eventStartTimeDiv.innerHTML = formatDate(startDate);
    eventEndTimeDiv.innerHTML = formatDate(endDate);
}

function attend(){
    console.log("Log in: " + persistence.login("Joe","123"));
    if(persistence.isLoggedIn()){
        var currentUser = persistence.getCurrentUser();
        showPopup(currentUser);
    }else{
        showPopup(null);
    }
}

startEventPageJS();

closePopup.onclick = function() {
    pupup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == pupup){
        pupup.style.display = "none";
    }
}

function showPopup(user = null){
    var eventNameField = document.getElementById("eventNameInput");
    var event = JSON.parse(jsonEvent);
    var registerButton = document.getElementById("registerButton");
    if(user != null){
        if(persistence.isUserAttending(user.name,event.name)){
            alert("you are already attending this event");
        }else{
            var nameField = document.getElementById("nameInput");
            var emailField = document.getElementById("emailInput");
            registerButton.username = user.name;
            registerButton.eventName = event.name;
            registerButton.addEventListener("click",function (evnt){
                persistence.userEventRegistration(evnt.target.username,evnt.target.eventName);
            });
            nameField.value = user.name;
            emailField.value = user.email;
            eventNameField.value = event.name;
            pupup.style.display = "block";
        }
    }
    
    
}