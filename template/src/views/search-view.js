export const toSearchView = (gifs, searchTerm) => `
<div id="Search">
  <h1>Search for ${searchTerm}</h1>
  <div class="content">
    ${gifs.data.map(gif => `
      <div class="Search-item">
        <img src="${gif.images.downsized_large.url}" alt="${gif.title}" />
        <p>${gif.title}</p>
      </div>
    `).join('')}
  </div>
</div>
`;