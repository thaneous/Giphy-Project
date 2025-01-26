export const toSearchView = (gifs, searchTerm) => `
<div id="Search">
  <h1>Search for ${searchTerm}</h1>
  <div class="content">
    ${gifs.data.map(gif => `
      <div class="Search-item">
<a href="#${gif.id}" id="details" data-gif-id="${gif.id}"><img src="${gif.images.downsized_large.url}" alt="${gif.title}" ></img></a>        <p>${gif.title}</p>
       </div>
    `).join('')}
  </div>
</div>
`;