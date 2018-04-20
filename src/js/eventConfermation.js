var per = getPersistence();
function replaceAll(org,find,replace){
    while(org.includes(find)){
       org = org.replace(find,replace);
    }
    return org;
}
function startEventConfermationJS(){
    var username = replaceAll(decodeURIComponent(getURLParams("username")),"+"," ");
    var eventName = replaceAll(decodeURIComponent(getURLParams("eventName")),"+"," ");

    var userNameDiv = document.getElementById("usernameDiv");
    var eventNameDiv = document.getElementById("eventNameDiv");

    userNameDiv.innerHTML = username;
    eventNameDiv.innerHTML = eventName;
}

startEventConfermationJS();