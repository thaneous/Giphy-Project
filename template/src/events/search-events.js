// filepath: /d:/Solution/solution/src/events/search-events.js
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { loadSearchGifs } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';

/**
 * Renders search items based on the provided search term.
 *
 * @param {string} searchTerm - The term to search for GIFs.
 * @returns {Promise<void>} A promise that resolves when the search items are rendered.
 */
export const renderSearchItems = async (searchTerm) => {
  const movies = await loadSearchGifs(searchTerm);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(movies, searchTerm);
};

 