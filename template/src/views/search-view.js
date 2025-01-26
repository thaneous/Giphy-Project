export const toSearchView = (gifs, searchTerm) => `
<div id="search">
  <h1>Search for ${searchTerm}</h1>
  <div class="content">
    ${gifs.data.map(gif => `
      <div class="search-item">
<a href="#" id="details" data-gif-id="${gif.id}"><img  class="gif-panel" src="${gif.images.downsized_medium.url}" alt="${gif.title}" ></img></a> 
       </div>
    `).join('')}
  </div>
</div>
`;