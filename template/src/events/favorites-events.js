import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';

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

  export const renderFavoriteStatus = (gifId) => {
    const favorites = getFavorites();
  
    return favorites.includes(gifId)
      ? `<span class="favorite active" data-id="${gifId}">${FULL_HEART}</span>`
      : `<span class="favorite" data-id="${gifId}">${EMPTY_HEART}</span>`;
  };