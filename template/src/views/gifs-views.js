import { loadDetails } from '../requests/request-service.js';
import { q } from '../events/helpers.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';

/**
 * Renders the details of a GIF by its ID.
 *
 * @param {string} id - The ID of the GIF to load and render details for.
 * @returns {Promise<void>} A promise that resolves when the GIF details have been rendered.
 * @throws Will log an error message to the console and display an error message in the container if loading the GIF details fails.
 */
export const renderGifDetails = async (id) => {
  try {
    const gifDetails = await loadDetails(id);
    q(CONTAINER_SELECTOR).innerHTML = `
    <div class="details-content">
      <div class="user-details">
        <img class="user-avatar" src="${gifDetails.data.user.avatar_url}" alt="${gifDetails.data.username}" />
        <p class="user-username">@${gifDetails.data.username}</p>
      </div>
      <div class="gif-details">
        <img class="gif-image" src="${gifDetails.data.images.original.url}" alt="${gifDetails.data.title}" />
        <p class="gif-title">${gifDetails.data.title}</p>
        </div>
      <div class="side-button">
        <i class="fa-solid fa-star fa-xl" style="color: #FFD43B;"></i>
        <a href="${gifDetails.data.images.original.url}" class="fav">Add To Favorite</a>
 
      </div>
    </div>
   
    `;
  } catch (error) {
    console.error("Error rendering GIF details:", error);
    q(CONTAINER_SELECTOR).innerHTML = `
          <div class="error-mess-div"><p class="error-mess">Error loading GIF details. Please try again later.</p></div>
`;
  }

}; 

 