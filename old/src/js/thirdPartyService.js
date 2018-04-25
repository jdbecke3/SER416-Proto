document.getElementById("req-shuttle").addEventListener("click", function() {
  let shuttleForm = document.getElementById('shuttleForm');
  let cleanerForm = document.getElementById('cleanerForm');
  shuttleForm.style.display = 'block';
  cleanerForm.style.display = 'none';
});

document.getElementById("req-clean").addEventListener("click", function() {
  let shuttleForm = document.getElementById('shuttleForm');
  let cleanerForm = document.getElementById('cleanerForm');
  cleanerForm.style.display = 'none';
  cleanerForm.style.display = 'block';
});

document.getElementById("submitButton").addEventListener("click", function() {
  let shuttleForm = document.getElementById('shuttleForm');
  let cleanerForm = document.getElementById('cleanerForm');
  shuttleForm.style.display = 'none';
  cleanerForm.style.display = 'none';
  document.getElementById('postSubmitMessage').innerHTML = "Thanks for Requesting!";
});

document.getElementById("submitButton1").addEventListener("click", function() {
  let shuttleForm = document.getElementById('shuttleForm');
  let cleanerForm = document.getElementById('cleanerForm');
  shuttleForm.style.display = 'none';
  cleanerForm.style.display = 'none';
  document.getElementById('postSubmitMessage').innerHTML = "Thanks for Requesting!";
});
