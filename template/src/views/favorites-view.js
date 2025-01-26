import { renderFavoriteStatus } from '../events/favorites-events.js';
import { API_KEY } from '../common/constants.js';
export const toFavoritesView = (gifs) => `
<div id="gifs">
  <h1>Favorite Gifs:</h1>
  <div class="content">
  ${gifs.length > 0 ? gifs.map(gif => `
    <div class="favorite-item">
      <a href="#" id="details" data-gif-id="${gif.id}">
        <img src="${gif.data && gif.data.images ? gif.data.images.downsized_large.url : `https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${gif.Id}`}"/>
      </a>
      ${renderFavoriteStatus(gif.id)}
    </div>
  `).join('') : '<p>No favorite GIFs found.</p>'}
  </div>
</div>
`;
