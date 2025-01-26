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
       </div>
    `).join('')}
  </div>
</div>
`;




 