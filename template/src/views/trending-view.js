import { renderFavoriteStatus } from '../events/favorites-events.js';
export const toTrendingView = (gifs) => `
<div id="trending">
<div class="section-info">
<i class="fa-solid fa-arrow-trend-up fa-2xl" style="color: #FFD43B;"></i>
  <h1 class='section-title'>Trending Now</h1>
  </div>
  <div class="content">
    ${gifs.data.map(gif => `
      <div class="trending-item">
        <a href="#${gif.id}" id="details" data-gif-id="${gif.id}"><img src="${gif.images.downsized_large.url}" alt="${gif.title}" /></a>
        ${renderFavoriteStatus(gif.id)}
        </div>
    `).join('')}
  </div>
</div>
`;

