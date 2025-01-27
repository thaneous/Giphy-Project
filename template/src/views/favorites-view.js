import { renderFavoriteStatus } from '../events/favorites-events.js';
import { API_KEY } from '../common/constants.js';

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