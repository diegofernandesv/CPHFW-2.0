// Get all buttons inside the carousel
const toggleButtons = document.querySelectorAll('.svg-button');

// Define the SVGs for both states
const emptySVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
    <path d="M1 19V1H16V19L8.5 15L1 19Z" stroke="black"/>
  </svg>
`;

const filledSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
    <path d="M1 19V1H16V19L8.5 15L1 19Z" fill="black" stroke="black"/>
  </svg>
`;

// Function to show popup notification
function showPopupNotification(button, message) {
    let popup = button.nextElementSibling;
    if (!popup || !popup.classList.contains('popup-notification')) {
        popup = document.createElement('div');
        popup.className = 'popup-notification';
        button.parentNode.appendChild(popup);
    }
    popup.textContent = message;
    popup.style.opacity = 1;
    setTimeout(() => {
        popup.style.opacity = 0;
    }, 1000); // Hide after 1 second
}

// Function to save favorites to local storage
function saveToFavorites(imageSrc) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(imageSrc)) {
        favorites.push(imageSrc);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

// Function to remove favorites from local storage
function removeFromFavorites(imageSrc) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(favorite => favorite !== imageSrc);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Loop through all buttons and apply the toggle logic
toggleButtons.forEach((toggleButton) => {
  let isFilled = false;

  // Toggle button state on click
  toggleButton.addEventListener('click', function() {
    const imageSrc = toggleButton.previousElementSibling.src;

    // Toggle between empty and filled SVGs
    if (isFilled) {
      toggleButton.innerHTML = emptySVG;
      showPopupNotification(toggleButton, 'Item removed from your favorites');
      removeFromFavorites(imageSrc);
    } else {
      toggleButton.innerHTML = filledSVG;
      showPopupNotification(toggleButton, 'Item added to your favorites');
      saveToFavorites(imageSrc);
    }

    // Update the state
    isFilled = !isFilled;
  });
});