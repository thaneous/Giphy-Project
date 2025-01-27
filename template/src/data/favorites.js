let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds a GIF ID to the list of favorites if it is not already present.
 * Updates the local storage with the new list of favorites.
 *
 * @param {string} gifId - The ID of the GIF to add to the favorites list.
 */
export const addFavorite = (gifId) => {
    if (favorites.find(id => id === gifId)) {
       return;
    }
  
    favorites.push(gifId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  export const removeFavorite = (gifId) => {
    favorites = favorites.filter(id => id !== gifId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  export const getFavorites = () => [...favorites];