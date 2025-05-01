'use strict';

// SELECTING ELEMENTS
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log( document.getElementsByClassName('btn'));

// // // CREATING AND INSERTING ELEMENTS
// // // 1- .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'we udse gcookies for improved functionality and analytics.';
// message.innerHTML = 'we udse gcookies for improved functionality and analytics. <button class = "btn--close--cookie"> Got it! </button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // // DELETE ELEMENTS
// document
// .querySelector('.btn--close--cookie')
// .addEventListener('click', function(){
//   // message.remove();
//   message.parentElement.removeChild(message);
// })


// // STYYLES
// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);


// document.documentElement.style.setProperty('--color-primary', 'orangered')

// // ATTRIBUTES
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful mimimalist logo'

// const h1 = document.querySelector('h1')

// h1.addEventListener('mouseenter', function(e){
//   alert('addEventListener: Great! you are reading the heading')
// })

// const alertH1 =  function(e){
//   alert('addEventListener: Great! you are reading the heading');

//   h1.removeEventListener('mouseenter', alertH1)
// };

// h1.addEventListener('mouseenter', alertH1)

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden,11,2');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden1,2,3,4');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal) );



btnCloseModal.addEventListener('click 1,2,3', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset);

    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset, 
    //   top:s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

    section1.scrollIntoView({behavior:'smooth'})
});

// rgb(255,255,255)
const randomInt = 



