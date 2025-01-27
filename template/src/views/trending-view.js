import { renderFavoriteStatus } from '../events/favorites-events.js';

/**
 * Generates the HTML markup for the trending view section.
 *
 * @param {Object} gifs - The object containing GIF data.
 * @param {Array} gifs.data - An array of GIF objects.
 * @param {string} gifs.data[].id - The unique identifier for the GIF.
 * @param {Object} gifs.data[].images - The images object for the GIF.
 * @param {Object} gifs.data[].images.downsized_large - The downsized large image object.
 * @param {string} gifs.data[].images.downsized_large.url - The URL of the downsized large image.
 * @param {string} gifs.data[].title - The title of the GIF.
 * @returns {string} The HTML markup for the trending view section.
 */
export const toTrendingView = (gifs) => `
<div id="trending">
  <div class="section-info">
    <i class="fa-solid fa-arrow-trend-up fa-2xl" style="color: #FFD43B;"></i>
    <h1 class='section-title'>Trending Now</h1>
  </div>
  <div class="content">
    ${gifs.data.map(gif => `
      <div class="trending-item">
        <a href="#${gif.id}" id="details" data-gif-id="${gif.id}">
          <img src="${gif.images.downsized_large.url}" alt="${gif.title}" />
        </a>
        ${renderFavoriteStatus(gif.id)}
      </div>
    `).join('')}
  </div>
</div>
`;