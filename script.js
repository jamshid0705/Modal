'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const btns = document.querySelectorAll('.show-modal');
console.log(btns);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModalBtn = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', openModal);
}

closeModal.addEventListener('click', closeModalBtn);
overlay.addEventListener('click', closeModalBtn);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalBtn();
  }
});
