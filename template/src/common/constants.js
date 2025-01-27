export const HOME = 'home';

export const FAVORITES = 'favorites';

export const TRENDING = 'trending';

export const ABOUT = 'about';

export const UPLOAD = 'upload';

export const CONTAINER_SELECTOR = '#container';

export const FULL_HEART = '❤';

export const EMPTY_HEART = '♡';

export const API_KEY = 'rJzyf2x2ZzmlX8nNVtSEClAZDHnGzdPm';

/**
 * A trending GIF endpoint
 * @param {number} limit - the limit of gifs shown on the page
 * @param {number} offset Specifies the starting position of the results.
 * @return {string} The endpoint link
 * @author Atanas Zaykov
 */
export const getTrendingURL = (limit = 25, offset = 0) => `
https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`;

/**
 * A searched GIF endpoint
 * @param {string} q - the text you are looking for
 * @param {number} limit - the limit of gifs shown on the page
 * @param {*} offset Specifies the starting position of the results.
 * @return {string} The endpoint link
 * @author Atanas Zaykov
 */
export const getSearchGifs = (q='', limit = 20, offset = 0) => `
https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}&limit=${limit}&offset=${offset}&rating=g`;


/**
 * A random GIF endpoint
 * @return {string} The endpoint link
 * @author Atanas Zaykov
 */
export const getRandomGifs = () => `
https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;


/**
 * Uploads a GIF to Giphy
 * @param {string} url - a URL or Base64 encoded string of the GIF
 * @param {string} sourceUrl - a URL of the GIF on the user's website
 * @param {string} tags - comma separated list of tags
 * @return {string} The endpoint link
 * @author Atanas Zaykov
 */
export const getUploadedURL = (url, sourceUrl, tags) => {
  return `https://api.giphy.com/v1/gifs/upload?api_key=${API_KEY}&source_image_url=${sourceUrl}&tags=${tags}`;
};


/**
 * A GIF by ID endpoint
 * @param {string} id - the ID of the GIF
 * @return {string} The endpoint link
 * @author Atanas Zaykov
 */
export const getGifByID = (id) => `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}&rating=g`;

/**
 * Uploaded by the user gifs by Ids endpoint
 * @param  {...any} ids - A list of ids
 * @return {string} The endpoint link
 */
/**
 * Constructs the endpoint URL for uploading GIFs to Giphy with the provided IDs.
 *
 * @param {...string} ids - The IDs of the GIFs to be uploaded.
 * @returns {string} The constructed endpoint URL.
 * @author Atanas Zaykov
 */
export const uploadedIdsEndpoint = (...ids) => `
https://upload.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${ids}`;

////missing functions
export const getNaskoGif = () => `https://api.giphy.com/v1/gifs/Igyb5XLZaZrWXMiq6G?api_key=${API_KEY}&rating=g`;

export const getMartiGif = () => ``;

export const getNikiGif = () => ``;