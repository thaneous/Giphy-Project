import {
  getCategories,
  getMoviesGeneralInfo,
  getMovieById,
  getCategory,
  searchMovies,
} from '../data/movies.js';

export const loadCategories = () => {
  const categories = getCategories();
  return categories;

};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
};

export const loadMovies = (categoryId = null) => {
  const movieGeneralInfo = getMoviesGeneralInfo(categoryId);
  return movieGeneralInfo;
};

export const loadSingleMovie = (id) => {
  const movie = getMovieById(id);

  return movie;
};

export const loadSearchMovies = (searchTerm = '') => {
  const searchedMovies = searchMovies(searchTerm);
  return searchedMovies;
};
