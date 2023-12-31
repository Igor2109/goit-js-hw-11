export default function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
          <div class="photo-card">
              <a  href="${largeImageURL}">
                <img class="gallery-link" src="${webformatURL}" alt="${tags}" loading="lazy" />
              </a>
              <div class="info">
                <p class="info-item">
                  <b>Likes:<br />
                  ${likes}</b>
                </p>
                <p class="info-item">
                  <b>Views:<br />
                  ${views}</b>
                </p>
                <p class="info-item">
                  <b>Comments:<br />
                  ${comments}</b>
                </p>
                <p class="info-item">
                  <b>Downloads:<br />
                  ${downloads}</b>
                </p>
              </div>
            </div>`;
      }
    )
    .join('');
}
