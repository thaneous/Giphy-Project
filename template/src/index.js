import { API_KEY, HOME, UPLOAD } from "./common/constants.js";
import { q } from "./events/helpers.js";
import { loadPage } from "./events/navigation-events.js";
import {
  renderFailure,
  renderLoadingView,
  renderUploadedGifs,
} from "./events/upload-events.js";
import { uploadGif } from "./requests/request-service.js";
import { renderSearchItems } from "./events/search-events.js";
import { renderGifDetails } from "./views/gifs-views.js";

document.addEventListener("DOMContentLoaded", () => {
  // add global listener
  document.addEventListener("click", (event) => {
    // nav events
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
    }

    // upload events
    if (
      event.target.classList.contains("try-again") ||
      event.target.classList.contains("new-upload")
    ) {
      loadPage(UPLOAD);
      (async () => await renderUploadedGifs())();
    }
    // upload handling
    if (event.target.classList.contains("upload-page")) {
      renderUploadedGifs();
    }

    //Gifs Details
    const detailsLink = event.target.closest("#details");
    
    if (detailsLink) {
      const gifId = detailsLink.getAttribute("data-gif-id");
      renderGifDetails(gifId);
    }
    // // show category events
    // if (event.target.classList.contains('view-category-btn')) {
    //   renderCategory(+event.target.getAttribute('data-category-id'));
    // }

    // // show movie events
    // if (event.target.classList.contains('view-details-btn')) {
    //   renderMovieDetails(+event.target.getAttribute('data-id'));
    // }

    // // toggle favorite event
    // if (event.target.classList.contains('favorite')) {
    //   toggleFavoriteStatus(+event.target.getAttribute('data-movie-id'));
    // }
  });

  // search events
  const searchInput = document.querySelector("input#search");
  const searchButton = document.querySelector("#searchButton");
  searchButton.addEventListener("click", async () => {
    const query = searchInput.value;
    await renderSearchItems(query);
  });
  loadPage(HOME);
});

document.addEventListener("DOMContentLoaded", () => {
  // upload events
  document.addEventListener("submit", (event) => {
    event.preventDefault();

    const fileInput = q("#file");
    const tags = q("#tags").value.trim();
    let urlInput = q("#url").value;

    let url;
    const formData = new FormData();
    formData.append("api_key", API_KEY);

    if (urlInput) {
      uploadGif((url = ""), urlInput, tags, formData);
      renderLoadingView();
    } else if (!urlInput && fileInput) {
      const file = fileInput.files[0];
      if (!file) {
        return renderFailure();
      }

      url = URL.createObjectURL(file);
      formData.append("file", file, "giphy.gif");

      uploadGif(url, (urlInput = ""), tags, formData);
      renderLoadingView();
    }
    return "Ok!";
  });

  loadPage(UPLOAD);
});
