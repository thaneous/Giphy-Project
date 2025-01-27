import { renderFavoriteStatus } from '../events/favorites-events.js';
/**
 * Generates the HTML for the search view.
 *
 * @param {Object} gifs - The object containing GIF data.
 * @param {Array} gifs.data - The array of GIF objects.
 * @param {string} gifs.data[].id - The unique identifier for the GIF.
 * @param {Object} gifs.data[].images - The images object for the GIF.
 * @param {Object} gifs.data[].images.downsized_medium - The downsized medium image object.
 * @param {string} gifs.data[].images.downsized_medium.url - The URL of the downsized medium image.
 * @param {string} gifs.data[].title - The title of the GIF.
 * @param {string} searchTerm - The search term used to find the GIFs.
 * @returns {string} The HTML string for the search view.
 */
export const toSearchView = (gifs, searchTerm) => `
<div class="search">
<div class="section-info">
    <i class="fa-solid fa-magnifying-glass fa-2xl" style="color: #FFD43B;"></i>
    <h1 class='section-title'>Search Results for "${searchTerm}"</h1>
  </div>  
  <div class="content">
    ${gifs.data.map(gif => `
      <div class="search-item">
<a href="#" id="details" data-gif-id="${gif.id}"><img  class="gif-panel" src="${gif.images.downsized_medium.url}" alt="${gif.title}" ></img></a> 
${renderFavoriteStatus(gif.id)}
       </div>
    `).join('')}
  </div>
</div>
`;




 