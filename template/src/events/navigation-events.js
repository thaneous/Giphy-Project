import { CONTAINER_SELECTOR, HOME, ABOUT, CATEGORIES, FAVORITES, TRENDING } from '../common/constants.js';
import { loadCategories, loadTrendingGifs } from '../requests/request-service.js';
import { toHomeView } from '../views/home-view.js';
import {
  toMoviesFromCategoryView,
  toSingleMovieView,
} from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';
import { toCategoriesView } from '../views/category-view.js';
import { loadMovies, loadCategory } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { getMovieById } from '../data/movies.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toTrendingView } from '../views/trending-view.js';

// public API
export const loadPage = (page = '') => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case ABOUT:
      setActiveNav(TRENDING);
      return renderTrending();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    case CATEGORIES:
      setActiveNav(CATEGORIES);
      return renderCategories();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    /* if the app supports error logging, use default to log mapping errors */
    default:
      return null;
  }
};

export const renderMovieDetails = (id = null) => {
  const movie = getMovieById(id);
  const HTML = toSingleMovieView(movie);

  q(CONTAINER_SELECTOR).innerHTML = HTML;
};


// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

// render trending
const renderTrending = () => {
  loadTrendingGifs()
  .then((data) => {
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(data);
  });
};


const renderCategories = () => {
  const category = loadCategories();
  const allCategoriesHTML = toCategoriesView(category);

  q(CONTAINER_SELECTOR).innerHTML = allCategoriesHTML;
};

const renderFavorites = () => {
  const favoriteMovieIds = getFavorites();
  const favoriteMovies = favoriteMovieIds.map(getMovieById);
  const filteredMoviesId = favoriteMovies.filter((x) => x);
  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(filteredMoviesId);
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
