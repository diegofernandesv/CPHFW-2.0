/*-------------------Support page--------------------- */
function togglePopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

// Close popups when clicking outside of the content
window.onclick = function (event) {
  const popups = document.querySelectorAll(".popup");
  popups.forEach(function (popup) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
};
/*-------------------Support page end--------------------- */

/*-------------------Profile page --------------------- */

function goToSupport() {
  window.location.href = "support.html";
}
function goToInvitations() {
  window.location.href = "invitations.html";
}

function goTomySchedule() {
  window.location.href = "your-schedule2.html";
}


function goToOutfits() {
  window.location.href = "outfits.html";
}

function showLanguageOptions() {
  alert("Language options coming soon!");
}

function goToSettings() {
  window.location.href = "settings.html";
}


// Show the language options modal
function showLanguageOptions() {
  document.getElementById("languageModal").style.display = "block";
}

// Close the language options modal
function closeLanguageOptions() {
  document.getElementById("languageModal").style.display = "none";
}

// Set the language (for demonstration purposes)
function setLanguage(language) {
  alert("Language selected: " + language);
  closeLanguageOptions(); // Close modal after selection
}

/*-------------------Profile page end--------------------- */

/*-------------------Invitation page --------------------- */

function goBackToProfile() {
  window.location.href = "profile.html";
}

/*-------------------Invitation page END--------------------- */

/*-------------------Setting page --------------------- */
// Get buttons and modals
const logoutButton = document.getElementById("logoutButton");
const deleteButton = document.getElementById("deleteButton");
const logoutModal = document.getElementById("logoutModal");
const deleteModal = document.getElementById("deleteModal");

// Get modal action buttons
const confirmLogout = document.getElementById("confirmLogout");
const cancelLogout = document.getElementById("cancelLogout");
const confirmDelete = document.getElementById("confirmDelete");
const cancelDelete = document.getElementById("cancelDelete");

// Show log out modal
logoutButton.addEventListener("click", () => {
  logoutModal.style.display = "flex";
});

// Show delete account modal
deleteButton.addEventListener("click", () => {
  deleteModal.style.display = "flex";
});

// Close modals on cancel
cancelLogout.addEventListener("click", () => {
  logoutModal.style.display = "none";
});

cancelDelete.addEventListener("click", () => {
  deleteModal.style.display = "none";
});

// Log out confirmation
confirmLogout.addEventListener("click", () => {
  logoutModal.style.display = "none";
  alert("Logged out successfully!"); // Replace with actual log out functionality
});

// Delete account confirmation
confirmDelete.addEventListener("click", () => {
  deleteModal.style.display = "none";
  alert("Account deleted successfully!"); // Replace with actual delete functionality
});
