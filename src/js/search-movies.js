// сделать проверки на корректность введенных данных, стделать трим лишних пробелов.
// после сабмита делается запрос с помощью функции getMoviesByKey передав в нее query.
// то что вернет функция отправляем в функцию в файле render-gallery.
import { getMoviesByKey } from '../js/api-service/get-movies-by-key';
import { refs } from './refs/refs';
import { renderMovies } from './render/render-gallery';
import { showLoader } from './loader/loader';
import { hideLoader } from './loader/loader';
import { notify } from './notify';
import { createPagination, clearContainerPagination } from './pagination';
import { setSessionStorage } from './storage/session-storage';
import storageConfig from './constants/storage-config';
import langs from './language/language-map';

const { languageSelect } = refs().panel;
const { moviesDiv } = refs().galleryRef;
const { searchForm } = refs().searchRef;
const { btnDay, btnWeek } = refs().trendingBtnsRef;
// const { modalError } = refs().modalErrorRef;
// const { modalErrorText } = refs().modalErrorRef;

// const delay = 3000;
let searchNameFilm = '';
// let timeoutID = null;

searchForm.elements.searchQuery.placeholder =
  langs.searchplaceholder[languageSelect.value];

searchForm.addEventListener('submit', onSubmit);
// modalError.addEventListener('click', onAttentionClick);

function onSubmit(e) {
  e.preventDefault();
  searchNameFilm = e.target.elements.searchQuery.value.trim();
  // console.log(searchNameFilm);

  if (searchNameFilm === '') {
    const text = langs.emptySearch[languageSelect.value];
    return notify(text);
  }

  renderBySearch(searchNameFilm, 1, true);

  // resetPage();
  //   clearContainerGallery();
  //   clearContainerPagination();

  // console.log(clearInput);
}

// function resetPage() {
//   page = 1;
// }

export function renderBySearch(searchNameFilm, page, isScroll) {
  if (!page) {
    page = 1;
  }
  showLoader();

  getMoviesByKey(searchNameFilm, page)
    .then(res => {
      if (!res) {
        const text = langs.badQuery[languageSelect.value];
        notify(text);

        // clearContainerGallery();
        // clearContainerPagination();

        return;
      }

      btnDay.checked = false;
      btnWeek.checked = false;

      setSessionStorage(storageConfig.BY_KEY, searchNameFilm);
      createPagination(res.total_pages, page);
      renderMovies(res);

      if (isScroll) {
        scroll();
      }
    })
    .finally(hideLoader);

  clearInput();
}

// function clearContainerGallery() {
//   moviesDiv.innerHTML = '';
// }

function clearInput() {
  searchForm.elements.searchQuery.value = '';
}

function scroll() {
  const { top } = moviesDiv.getBoundingClientRect();
  // console.log(top);

  window.scrollBy({
    top: top,
    behavior: 'smooth',
  });
}

// function onAttentionClick() {
//   hideError();
//   clearInterval(timeoutID);
// }

// function showError(text) {
//   modalError.classList.remove('is-hidden');

//   attentionText(text);
//   clearInput();

//   timeoutID = setTimeout(() => {
//     hideError();
//   }, delay);
// }

// function hideError() {
//   modalError.classList.add('is-hidden');
// }

// function attentionText(text) {
//   modalErrorText.innerHTML = `${text}`;
// }
