import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';
import { loadSearchMovies } from '../requests/request-service.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';

//renderSearch
export const renderSearchItems = (searchTerm) => {
  const availableMovies = loadSearchMovies(searchTerm);
  const searchHTML = toSearchView(availableMovies, searchTerm);
  q(CONTAINER_SELECTOR).innerHTML = searchHTML;
};