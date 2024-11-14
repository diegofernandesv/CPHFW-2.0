document.addEventListener('DOMContentLoaded', () => {
    const favoritesContainer = document.querySelector('.favorites-container');

    // Function to load favorites from local storage
    function loadFavorites() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favoritesContainer.innerHTML = '';
        favorites.forEach(imageSrc => {
            const favoriteItem = document.createElement('div');
            favoriteItem.className = 'favorite-item';
            favoriteItem.innerHTML = `
                <img src="${imageSrc}" alt="Favorite Image" class="favorite-image">
                <button class="delete-button">X</button>
            `;
            favoritesContainer.appendChild(favoriteItem);
        });
    }

    // Function to delete a favorite
    function deleteFavorite(imageSrc) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites = favorites.filter(favorite => favorite !== imageSrc);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        loadFavorites();
    }

    // Event listener for delete buttons
    favoritesContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-button')) {
            const imageSrc = e.target.previousElementSibling.src;
            deleteFavorite(imageSrc);
        }
    });

    // Load favorites on page load
    loadFavorites();
});