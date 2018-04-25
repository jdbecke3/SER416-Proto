document.getElementById("donation-public").addEventListener("click", function() {
  let publicDonationForm = document.getElementById('publicDonationForm');
  let privateDonationForm = document.getElementById('privateDonationForm');
  publicDonationForm.style.display = 'block';
  privateDonationForm.style.display = 'none';
});

document.getElementById("donation-private").addEventListener("click", function() {
  let publicDonationForm = document.getElementById('publicDonationForm');
  let privateDonationForm = document.getElementById('privateDonationForm');
  publicDonationForm.style.display = 'none';
  privateDonationForm.style.display = 'block';
});

document.getElementById("submitButtonPublic").addEventListener("click", function() {
  let publicDonationForm = document.getElementById('publicDonationForm');
  let privateDonationForm = document.getElementById('privateDonationForm');
  publicDonationForm.style.display = 'none';
  privateDonationForm.style.display = 'none';

  document.getElementById('postSubmitMessage').innerHTML = "Thanks for Submitting!";
});

document.getElementById("submitButtonPrivate").addEventListener("click", function() {
  let publicDonationForm = document.getElementById('publicDonationForm');
  let privateDonationForm = document.getElementById('privateDonationForm');
  publicDonationForm.style.display = 'none';
  privateDonationForm.style.display = 'none';

  document.getElementById('postSubmitMessage').innerHTML = "Thanks for Submitting!";
});
