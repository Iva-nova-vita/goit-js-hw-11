import fetchPhotosByQuery from './js/pixabay-api';
import showNotification from './js/notifications';
import renderGallery from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.form');
const ulEl = document.querySelector('.cards');
const loaderEl = document.querySelector('.loader');

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const querySearch = formEl.elements.search.value.trim();
  if (!querySearch) {
    showNotification('Sorry, the query field can not be empty');
    return;
  }

  ulEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchPhotosByQuery(querySearch)
    .then(data => {
      if (!data.hits.length) {
        showNotification(
          'Sorry, there are no images matching your search query. <br>Please try again!'
        );
        return;
      }
      const markup = renderGallery(data.hits);
      ulEl.insertAdjacentHTML('afterbegin', markup);
      const lightbox = new SimpleLightbox('.cards a', { captionsData: 'alt' });
    })
    .catch(error => console.log(error))
    .finally(() => loaderEl.classList.add('is-hidden'));
  formEl.reset();
});
