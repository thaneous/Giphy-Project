import { renderFavoriteStatus } from '../events/favorites-events.js';
import { API_KEY } from '../common/constants.js';

/**
 * Generates the HTML markup for the favorites view.
 *
 * @param {Array} gifs - An array of GIF objects to be displayed as favorites.
 * @returns {string} The HTML string representing the favorites view.
 *
 * Each GIF object in the array should have the following structure:
 * {
 *   id: {string} - The unique identifier for the GIF.
 *   images: {object} - An object containing image URLs for the GIF.
 *   title: {string} - The title of the GIF.
 * }
 *
 * The function filters out any invalid GIF objects (those without an id),
 * and maps each valid GIF to an HTML string. If there are no valid GIFs,
 * a message indicating no favorite GIFs are found is displayed.
 * @author Martin Mesechkov
 */
export const toFavoritesView = (gifs) => `
<div id="gifs">
   <div class="fav-content">
  ${gifs.length > 0 ? gifs.filter(gif => gif && gif.id).map(gif => `
    <div class="favorite-item">
      <a href="#" id="details" data-gif-id="${gif.id}">
        <img  class="fav-gif" src="${gif.images ? gif.images.downsized_large.url : `https://api.giphy.com/v1/gifs/${gif.id}?api_key=${API_KEY}`}" alt="${gif.title || 'GIF'}"/>
      </a>
      ${renderFavoriteStatus(gif.id)}
    </div>
  `).join('') : '<p>No favorite GIFs found.</p>'}
  </div>
</div>
`;