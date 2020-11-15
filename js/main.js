'use strict';
const scrooll = document.querySelector('.scroll');
window.onscroll = function () {
  scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
    scrooll.style.display = 'block';
  } else {
    scrooll.style.display = 'none';
  }
}
scrooll.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// modal
const modal = document.querySelector('.modal__covid');
const modalAbout = document.querySelector('.modal__about');
const modalFeedback = document.querySelector('.modal__feedback');
const btnOpen = document.querySelector('.intro__covid-link');
const btnOpenM = document.querySelector('.modal__covid-linkm');
const btnOpenCov = document.querySelector('.modal__covid-link');
const btnOpenCovM = document.querySelector('.modal__covid-linkm');
const btnOpenTwo = document.querySelector('.modal__about-link');
const btnOpenTwoM = document.querySelector('.modal__about-linkm');
const btnOpenFeedback = document.querySelector('.feedback__link');
const btnClose = document.querySelector('.modal__close');

// overlay
const overlay = document.createElement('div')
overlay.classList.add('overlay');
document.body.insertAdjacentElement("beforeend", overlay);
// openModal
const openModal = () => {
  modal.classList.add('modal__covid-active');
  overlay.classList.add('active')
};
const openModalTwo = () => {
  modalAbout.classList.add('modal__about-active');
  overlay.classList.add('active')
};
const openModalFeedback = () => {
  modalFeedback.classList.add('modal__feedback-active');
  overlay.classList.add('active')
};
// closeModal
const closeMenu = () => {
  modal.classList.remove('modal__covid-active');
  modalAbout.classList.remove('modal__about-active');
  modalFeedback.classList.remove('modal__feedback-active');
  overlay.classList.remove('active')
};
btnOpen.addEventListener('click', openModal);
btnOpenM.addEventListener('click', openModal);
btnOpenCov.addEventListener('click', openModal);
btnOpenCovM.addEventListener('click', openModal);
btnOpenTwo.addEventListener('click', openModalTwo);
btnOpenTwoM.addEventListener('click', openModalTwo);
btnOpenFeedback.addEventListener('click', openModalFeedback);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeMenu();
    };
  });


const burgerMenuButton = document.querySelector('.burger__menu-button');
const burgerMenuButtonActive = document.querySelector('.burger__menu-lines');

const openBurger = () => {
  burgerMenuButton.classList.toggle('burger__menu-active');
};
const closeBurger = () => {
};
burgerMenuButton.addEventListener('click', openBurger);

