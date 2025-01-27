import { CONTAINER_SELECTOR, HOME, ABOUT, FAVORITES, UPLOAD } from '../common/constants.js';
import { fetchFavorites, loadTrendingGifs } from '../requests/request-service.js';
 import { q, setActiveNav } from './helpers.js';
import { toAboutView } from '../views/about-view.js';
import { toTrendingView } from '../views/trending-view.js';
import { renderUploadedGifs } from './upload-events.js';
import { toUploadView } from '../views/upload-view.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesView } from '../views/favorites-view.js';

// public API
/**
 * Loads the specified page and performs the necessary actions to render it.
 *
 * @param {string} [page=''] - The name of the page to load. Possible values are 'HOME', 'FAVORITES', 'UPLOAD', and 'ABOUT'.
 * 
 * @returns {void|null} - Returns the result of the render function for the specified page, or null if the page is not recognized.
 */
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

// render trending
/**
 * Renders the trending GIFs by loading them and updating the container's inner HTML.
 * 
 * This function fetches the trending GIFs using the `loadTrendingGifs` function,
 * then updates the inner HTML of the container specified by `CONTAINER_SELECTOR`
 * with the result of the `toTrendingView` function.
 * 
 * @returns {void}
 * @author Martin Mesechkov
 */
export const renderTrending = () => {
  loadTrendingGifs()
  .then((data) => {
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(data);
  });
};

//render upload
/**
 * Renders the upload view by setting the inner HTML of the container
 * to the upload view template and then renders the uploaded GIFs.
 */
const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
  renderUploadedGifs();
};

// render favorites
/**
 * Renders the favorite GIFs by fetching them based on their IDs.
 * 
 * This function retrieves the list of favorite GIF IDs, fetches the corresponding GIFs,
 * and then updates the DOM to display these favorite GIFs. It handles invalid IDs by
 * logging an error and excluding them from the final rendered view.
 * 
 * @async
 * @function renderFavorites
 * @returns {Promise<void>} A promise that resolves when the favorite GIFs have been rendered.
 * @author Martin Mesechkov
 */
const renderFavorites = async () => {
  const favorites = getFavorites();
  console.log('Favorites:', favorites);

  const favGifs = await Promise.all(favorites.map(async (id) => {
    if (!id) {
      console.error('Invalid gifId:', id);
      return null;
    }
    const gif = await fetchFavorites(id);
    console.log(`Fetched gif for id ${id}:`, gif);
    return gif;
  }));

  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favGifs.filter(gif => gif !== null));
  console.log('Rendered favorites view.');
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
