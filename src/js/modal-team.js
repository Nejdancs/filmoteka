import confetti from 'canvas-confetti';
import { refs } from './refs/refs';

let modalTeamRef;
modalTeamRef = refs().modalTeamRef;
const colors = ['#ff6b02', '#ff001b', '#ffffff'];

modalTeamRef.teamModalOpen.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();
  modalTeamRef.teamModal.classList.remove('is-hidden');
  showConfetti();

  window.addEventListener('keydown', closeModalByEsc);
  window.addEventListener('click', closeModalByClick);
  modalTeamRef.teamModalBtn.addEventListener('click', closeModal);

  function clearEventListeners() {
    window.removeEventListener('click', closeModalByClick);
    window.removeEventListener('keydown', closeModalByEsc);
    modalTeamRef.teamModalBtn.removeEventListener('click', closeModal);
  }

  function closeModalByEsc(e) {
    if (e.key === 'Escape') {
      modalTeamRef.teamModal.classList.add('is-hidden');
      clearEventListeners();
    }
  }

  function closeModalByClick(e) {
    if (e.target === modalTeamRef.teamModal) {
      modalTeamRef.teamModal.classList.add('is-hidden');
      clearEventListeners();
    }
  }

  function closeModal(e) {
    modalTeamRef.teamModal.classList.add('is-hidden');
    clearEventListeners();
  }

  function showConfetti() {
    confetti.create(document.getElementById('canvas'), {
      resize: true,
      useWorker: true,
    })({ particleCount: 200, spread: 200, zIndex: 2021, colors: colors });
  }
}