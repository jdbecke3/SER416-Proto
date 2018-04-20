
var jsonEvent = window.sessionStorage.getItem("selectedEvent");
window.sessionStorage.removeItem("selectedEvent");
var persistence = getPersistence();

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

// Get the modal
var modal = document.getElementById('myModal'); 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
            modal.style.display = "block";
        }
    }
    
    
}