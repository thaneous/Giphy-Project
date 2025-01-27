import { API_KEY, getUploadedURL, getGifByID } from '../common/constants.js';
import { addUploadedGif, getUploadedIds, renderFailure, renderSuccess, renderUploadedGifs } from '../events/upload-events.js';
 
/**
 * Loads GIFs based on the search term from the Giphy API.
 *
 * @async
 * @function loadSearchGifs
 * @param {string} [searchTerm=''] - The term to search for GIFs.
 * @returns {Promise<Object>} The response object containing the search results.
 * @throws {Error} If the fetch request fails.
 */
export const loadSearchGifs = async (searchTerm = '') => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=20`);
    if (!response.ok) {
      throw new Error("Failed to fetch search GIFs");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    return { data: [] };
  }
};

/**
 * Uploads a GIF to Giphy
 * @param {string} url - a URL of the GIF
 * @param {string} sourceUrl - a URL of the GIF on the user's website
 * @param {string} tags - comma separated list of tags
 * @param {FormData} formData - the GIF data
 * @return {Promise<void>}
 * @throws {Error} if the request fails
 */
export const uploadGif = async (url = '', sourceUrl = '', tags, formData = '') => {
  try {
    const response = await fetch(getUploadedURL(url, sourceUrl, tags), {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    const id = await result.data.id;

    if (url && response.status === 200) {
      renderSuccess(url);
      addUploadedGif(id);
      await renderUploadedGifs();
    } else if (sourceUrl && response.status === 200) {
      renderSuccess(sourceUrl);
      addUploadedGif(id);
      await renderUploadedGifs();
    } else if (response.status >= 400 && response.status <= 500) {
      renderFailure(response.status);
    }
  } catch (error) {
    console.error(error);
    renderFailure();
  }
};

// eslint-disable-next-line valid-jsdoc
/**
 * Asyncronous getting information about gifs from Giphy API
 * @param {string} searchTerm - the gif that the user is looking for
 * @return Array of objects with the data about each gif
 */
export const loadTrendingGifs = async () => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`);
    if (!response.ok) {
      throw new Error("Failed to fetch trending GIFs");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    return { data: [] };
  }
};

/**
 * Fetches a random GIF from the Giphy API
 * @return {Promise<Object>} A promise that resolves to an object containing the data of the random GIF
 */
export const loadRandomGif = async () => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error('Error fetching random GIF', error);
  }
};

/**
 * Fetches an array of GIF objects from the Giphy API by their IDs
 * @param  {string} gifIds - A comma-separated list of GIF IDs to fetch
 * @return {Promise<Array<Object>>} A promise that resolves to an array of objects containing the data of the GIFs
 */
export const fetchFavorites = async (gifId) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${gifId}`);
    const data = await response.json();
    console.log('Fetched data:', data);
    return data.data[0]; 
  } catch (error) {
    console.error('Error fetching GIF by ID:', error);
    return null;
  }
};

/**
 * Fetches the details of a single GIF by its ID
 * @param {string} id The ID of the GIF to fetch
 * @return {Promise<Object>} A promise that resolves to an object containing the data of the GIF
 * @throws {Error} If the request fails
 */

/**
 * Fetches the GIFs uploaded by the user from the Giphy API
 * @return {Promise<Array<Object>>} A promise that resolves to an array of objects containing the data of the uploaded GIFs
 */
export const loadUploadedGifs = async () => {
  const idsList = getUploadedIds();

  const response = await fetch(uploadedIdsEndpoint(idsList));
  const result = await response.json();

  return result.data;
};


/**
 * Fetches a GIF by name from the Giphy API
 * @param {string} name The name of the GIF to fetch
 * @return {Promise<Object>} A promise that resolves to an object containing the data of the GIF
 * @throws {Error} If the GIF is not found
 */
export const loadGifByName = async (name) => {
  let endpoint;

  switch (name) {
  case 'Atanas':
    endpoint = getNaskoGif();
    break;
  case 'Martin':
    endpoint = getMartiGif();
    break;
  case 'Nikolai':
    endpoint = getNikiGif();
    break;
  default:
    throw new Error(`Unknown name: ${name}`);
  }

  const response = await fetch(endpoint);
  const result = await response.json();

  return result.data;
};


/**
 * Fetches the details of a single GIF by its ID
 * @param {string} id The ID of the GIF to fetch
 * @return {Promise<Object>} A promise that resolves to an object containing the data of the GIF
 * @throws {Error} If the request fails
 */
export const loadDetails = async (id) => {
  try {
    const response = await fetch(getGifByID(id));
    if (!response.ok) {
      throw new Error("Failed to fetch GIF details");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GIF details:", error);
    return {};
  }
};



 