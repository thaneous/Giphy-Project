export const toTrendingView = (gifs) => `
<div id="trending">
  <h1>Trendings</h1>
  <div class="content">
    ${gifs.data.map(gif => `
      <div class="trending-item">
        <img src="${gif.images.downsized_large.url}" alt="${gif.title}" />
        <p>${gif.title}</p>
      </div>
    `).join('')}
  </div>
</div>
`;

