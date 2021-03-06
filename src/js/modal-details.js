// Для подстановки динамических данных нужно сделать запрос getDetails() передать id
// и использовать функцию из файла render-details для их отрисовки
//
// нужно при открытии вызывать функцию реализованую в файлах queue или watched которая проверяет
// есть ли фильм в хранилище и подсвечивает кнопки.

import { refs } from './refs/refs';
import { getDetails } from './api-service/get-details';
import { modalButtonsHandler } from './modal-details/watched';
import { onOpenModal } from './open-close-modal-details';
import {
  renderModalDetails,
  renderModalBackdrop,
} from './render/render-details';
import { showLoader, hideLoader } from './loader/loader';
import { notify } from './notify';
import langs from './language/language-map';
import { createIframe } from './modal-trailer';

const { languageSelect } = refs().panel;
const { filmTrailerBtn } = refs().filmDetailsRef;

export async function onFilmClick(event) {
  event.preventDefault();

  if (!event.target.closest('.gallery-card')) {
    return;
  }

  showLoader();

  let movieId = event.target.closest('.gallery-card').dataset.id;
  const data = await getDetails(movieId);

  if (data) {
    renderModalDetails(data);
    renderModalBackdrop(data);
    modalButtonsHandler(movieId);
    onOpenModal();
  } else {
    const text = langs.notMovie[languageSelect.value];
    notify(text);
  }

  hideLoader();

  addListener(movieId);
}

let openModalTrailer;

function addListener(movieId) {
  openModalTrailer = () => {
    createIframe(movieId);
  };

  filmTrailerBtn.addEventListener('click', openModalTrailer);
}

export function clearListener() {
  filmTrailerBtn.removeEventListener('click', openModalTrailer);
}
