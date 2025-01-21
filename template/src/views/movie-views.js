import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;

export const toSingleMovieView = (movie) => toMovieDetailed(movie);

export const toMovieSimple = (movie) => `
  <div class="movie-item">
    <h3 class="movie-title">${movie.title}</h3>
    <p class="movie-year">${movie.year}</p>
    <img src="${movie.poster}"</img>
    <br>
    <button class="view-details-btn" data-id="${movie.id}">View Details</button>
    ${renderFavoriteStatus(movie.id)}
  </div>
`;

const toMovieDetailed = (movie) =>`
<div class="toMovieDetailed-movie-item">
  <h3 class="toMovieDetailed-movie-title">${movie.title} (${movie.year})</h3>
  <div id="toMovieDetailed-border">
    <img src="${movie.poster}"/>
    <br />
    <div class="toMovieDetailed-details">
      <p class="detailed-movie-genre">Genre: ${movie.genre}</p>
      <p class="detailed-movie-director">Director: ${movie.director}</p>
      <p class="detailed-movie-stars">Staring: ${movie.stars.join(', ')}</p>
      <p class="detailed-movie-plot">Plot: ${movie.description}</p>
    </div>
  </div>
</div>
`;
