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

function getCalendar(){
    console.log("Get Calendar");
    return new Calendar();
}

function getPopup(innerHTMLOfPopup, innerhHTMLOfInput){
    var div = document.createElement("Div");
    div.className = "popup";
    div.innerHTML = `<div id="popupBox" class="popupBox">

    <div class="popup-content">
      <span class="close">&times;</span>
      <div id="innerhHTMLOfPopup">`+innerHTMLOfPopup+`</div>
      <div id="innerHTMLOfInput">`+innerhHTMLOfInput+`</div>
    </div>`;
    return div;
}