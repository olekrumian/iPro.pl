'use strict';
// modal
 const modalAplikuj = document.querySelector('.modal__aplikuj');
 const btnOpenAplikuj = document.querySelector('.intro__btn');
 const btnCloseA = document.querySelector('.modal__closea');

 // overlay
 const overlayNew = document.createElement('div')
 overlayNew.classList.add('overlay');
 document.body.insertAdjacentElement("beforeend", overlayNew);
 // openModal
 const openModalAplikuj = () => {
   modalAplikuj.classList.add('modal__aplikuj-active');
   overlayNew.classList.add('active')
 };
 // closeModal
 const closeMenuA = () => {
   modalAplikuj.classList.remove('modal__aplikuj-active');
   overlayNew.classList.remove('active')
 };
 btnOpenAplikuj.addEventListener('click', openModalAplikuj);
 btnCloseA.addEventListener('click', closeMenuA);
 overlayNew.addEventListener('click', closeMenuA);

 document.addEventListener('keydown', (event) => {
   if (event.code === 'Escape') {
     closeMenu();
   };
 });