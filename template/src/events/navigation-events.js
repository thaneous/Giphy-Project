import { CONTAINER_SELECTOR, HOME, ABOUT, FAVORITES, UPLOAD } from '../common/constants.js';
import { loadTrendingGifs } from '../requests/request-service.js';
import { toHomeView } from '../views/home-view.js';
import { q, setActiveNav } from './helpers.js';
import { toAboutView } from '../views/about-view.js';
import { toTrendingView } from '../views/trending-view.js';
import { renderUploadedGifs } from './upload-events.js';
import { toUploadView } from '../views/upload-view.js';


// public API
export const loadPage = (page = '') => {

  switch (page) { 

  case HOME:
    setActiveNav(HOME);
    return renderTrending();

  case FAVORITES:
    setActiveNav(FAVORITES);
    return renderFavorites();

  case UPLOAD:
    setActiveNav(UPLOAD);
    return renderUpload();

  case ABOUT:
    setActiveNav(ABOUT);
    renderAbout();

    // Add event listeners to the names
    document.getElementById('Atanas').addEventListener('click', () => {
      renderAboutGif('Atanas');
    });

    document.getElementById('Martin').addEventListener('click', () => {
      renderAboutGif('Martin');
    });

    document.getElementById('Nikolai').addEventListener('click', () => {
      renderAboutGif('Nikolai');
    });
    break;

    /* if the app supports error login, use default to log mapping errors */
  default: return null;
  }

};

 


// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

// render trending
export const renderTrending = () => {
  loadTrendingGifs()
  .then((data) => {
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(data);
  });
};

//render upload
const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
  renderUploadedGifs();
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
