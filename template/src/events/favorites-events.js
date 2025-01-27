import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';

/**
 * Toggles the favorite status of a GIF.
 *
 * This function checks if a GIF is already in the favorites list. If it is, it removes it from the favorites
 * and updates the corresponding heart icon to an empty heart. If it is not, it adds it to the favorites
 * and updates the heart icon to a full heart.
 *
 * @param {string} gifId - The unique identifier of the GIF.
 */
export const toggleFavoriteStatus = (gifId) => {
    const favorites = getFavorites();
    const heartSpan = q(`span[data-id="${gifId}"]`);

    if (!heartSpan) {
        console.error(`Element with gif-id="${gifId}" not found.`);
        return;
    }
    
    if (favorites.includes(gifId)) {
      removeFavorite(gifId);
      heartSpan.classList.remove('active')
      heartSpan.innerHTML = EMPTY_HEART;
    } else {
      addFavorite(gifId);
      heartSpan.classList.add('active');
      heartSpan.innerHTML = FULL_HEART;
    }
  };

/**
 * Renders the favorite status of a GIF.
 *
 * This function checks if the given GIF ID is present in the list of favorites.
 * If it is, it returns a span element with a full heart icon and an active class.
 * Otherwise, it returns a span element with an empty heart icon.
 *
 * @param {string} gifId - The ID of the GIF to check.
 * @returns {string} The HTML string representing the favorite status of the GIF.
 */
export const renderFavoriteStatus = (gifId) => {
    const favorites = getFavorites();
  
    return favorites.includes(gifId)
      ? `<span class="favorite active" data-id="${gifId}">${FULL_HEART}</span>`
      : `<span class="favorite" data-id="${gifId}">${EMPTY_HEART}</span>`;
};