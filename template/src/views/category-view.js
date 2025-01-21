
export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="content">
    ${categories.map(toSingleCategoryView).join('\n')}
  </div>
</div>
`;

export const toSingleCategoryView = (category) => `
  <div class="category-item" data-category-id="${category.id}">
    <h2 class="category-title">${category.name}</h2>
    <p class="category-count">Movies: ${category.moviesCount}</p>
    <button class="view-category-btn" data-category-id="${category.id}">View Movies</button>
  </div>
`;