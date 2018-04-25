document.getElementById("vol-event").addEventListener("click", function() {
  let eventForm = document.getElementById('eventForm');
  let thirdPartyForm = document.getElementById('thirdPartyForm');
  let classForm = document.getElementById('classForm');
  eventForm.style.display = 'block';
  thirdPartyForm.style.display = 'none';
  classForm.style.display = 'none';
});

document.getElementById("vol-3rdparty").addEventListener("click", function() {
  let eventForm = document.getElementById('eventForm');
  let thirdPartyForm = document.getElementById('thirdPartyForm');
  let classForm = document.getElementById('classForm');
  eventForm.style.display = 'none';
  thirdPartyForm.style.display = 'block';
  classForm.style.display = 'none';
});

document.getElementById("vol-class").addEventListener("click", function() {
  let eventForm = document.getElementById('eventForm');
  let thirdPartyForm = document.getElementById('thirdPartyForm');
  let classForm = document.getElementById('classForm');
  eventForm.style.display = 'none';
  thirdPartyForm.style.display = 'none';
  classForm.style.display = 'block';
});

document.getElementById("submitButton").addEventListener("click", function() {
  let eventForm = document.getElementById('eventForm');
  let thirdPartyForm = document.getElementById('thirdPartyForm');
  let classForm = document.getElementById('classForm');
  eventForm.style.display = 'none';
  thirdPartyForm.style.display = 'none';
  classForm.style.display = 'none';

  document.getElementById('postSubmitMessage').innerHTML = "Thanks for Submitting!";
});

document.getElementById("submitButton1").addEventListener("click", function() {
  let eventForm = document.getElementById('eventForm');
  let thirdPartyForm = document.getElementById('thirdPartyForm');
  let classForm = document.getElementById('classForm');
  eventForm.style.display = 'none';
  thirdPartyForm.style.display = 'none';
  classForm.style.display = 'none';

  document.getElementById('postSubmitMessage').innerHTML = "Thanks for Submitting!";
});

document.getElementById("submitButton2").addEventListener("click", function() {
  let eventForm = document.getElementById('eventForm');
  let thirdPartyForm = document.getElementById('thirdPartyForm');
  let classForm = document.getElementById('classForm');
  eventForm.style.display = 'none';
  thirdPartyForm.style.display = 'none';
  classForm.style.display = 'none';

  document.getElementById('postSubmitMessage').innerHTML = "Thanks for Submitting!";
});
