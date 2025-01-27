/**
 * Returns an HTML template string for the upload page.
 * The upload page should include:
 * - a form with a file input for selecting a GIF
 * - a text input for tags
 * - a text input for an optional URL upload
 * - a submit button
 * - a container for displaying the uploaded GIFs
 * @return {string} HTML content for the upload page
 */
export const toUploadView = () => `
<div class="bg">

<div class="parent-upload">
<div class="upload-container">
<h2>Upload your own GIF</h2>
<form id="form">
<div class="upload-elm-div">
<i class="icon fa-solid fa-video fa-xl" style="color: #ffffff;"></i>
  <h3 class="big-title">GIF</h3>
  <p class="small-title">Upload GIF</p>
  <input class="upload-element" id="file" type="file" accept="image/gif">
</div>

  <label class="label" for="tags">Tags</label>
  <input class="upload-element" id="tags" type="text" name="tags">
  
  <label class="label" for="url">URL Upload (Optional)</label>
  <input class="upload-element" id="url" type="url" name="url">
  
  <br>
  <button class="upload-element" id="upload" type="submit">UPLOAD</button>
    </form>
</div>
<div class="uploaded-container-outer">
<h2>Uploaded GIFs</h2>
<div class="uploaded-container-inner"></div>
</div>
</div>
`;

/**
 * Returns an HTML template string for all uploaded GIFs.
 * @param {Array<Object>} uploadedGifs - Array of objects containing GIF metadata
 * @return {string} HTML content for all uploaded GIFs
 */
export const toUploadedView = (uploadedGifs) => {
    return `
      ${uploadedGifs.map(toUploadedItemView).join('')}
    `;
  };

  
/**
 * Returns an HTML template string for a single uploaded GIF item.
 * @param {Object} gifInfo - object containing GIF metadata
 * @return {string} HTML content for a single uploaded GIF item
 */
  export const toUploadedItemView = (gifInfo) => `
    <div class=".gif-item">
    <a href="#/uploaded/${gifInfo.id}">
    <img class="uploaded-gif" src="${gifInfo.images.fixed_width.url} alt="${gifInfo.title}">
    </a>
    </div>
    `;
    
/**
 * Returns an HTML template string for displaying a message when there are no uploaded GIFs.
 * @return {string} HTML content indicating no uploads are available.
 */

    export const toEmptyUploadedView = () => `
    <div>
    <h3>No Uploads yet!</h3>
    </div>`;    