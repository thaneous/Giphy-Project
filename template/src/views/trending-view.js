export const toTrendingView = (gifs) => `
<div id="trending">
  <h1>Trendings</h1>
  <div class="content">
    ${gifs.data.map(gif => `
      <div class="trending-item">
        <a href="#${gif.id}" id="details" data-gif-id="${gif.id}"><img src="${gif.images.downsized_large.url}" alt="${gif.title}" /></a>
        </div>
    `).join('')}
  </div>
</div>
`;

