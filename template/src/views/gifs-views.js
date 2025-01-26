import { loadDetails } from '../requests/request-service.js';
import { q } from '../events/helpers.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';

export const renderGifDetails = async (id) => {
  try {
    const gifDetails = await loadDetails(id);
    q(CONTAINER_SELECTOR).innerHTML = `
      <div class="gif-details">
        <img src="${gifDetails.data.images.original.url}" alt="${gifDetails.data.title}" />
        <p>${gifDetails.data.title}</p>
        <p>${gifDetails.data.username}</p>
        <p>${gifDetails.data.rating}</p>
        
      </div>
      <div class="user-details">
      <img src="${gifDetails.data.avatar_url}" alt="">
    <p>@${gifDetails.data.username}</p>
    <p>${gifDetails.data.user.display_name}</p>
     
</div>
    `;
  } catch (error) {
    console.error("Error rendering GIF details:", error);
    q(CONTAINER_SELECTOR).innerHTML = `<p>Error loading GIF details. Please try again later.</p>`;
  }

}; 