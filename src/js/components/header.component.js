const dropMenu = document.querySelector('.header__drop-menu');
const burger = document.querySelector('.header__burger');

if (burger && dropMenu) {
  burger.addEventListener('click', () => {
    dropMenu.classList.toggle('active');
    burger.classList.toggle('active');
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('scroll');
  } else {
    document.querySelector('.header').classList.remove('scroll');
  }
});

window.addEventListener('click', (event) => {
  if (
    !event.target.closest('.header__burger') &&
    !event.target.closest('.header__drop-menu')
  ) {
    dropMenu.classList.remove('active');
    burger.classList.remove('active');
  }
});

const langSelector = document.querySelector('.lang-selector');

if (langSelector) {
  langSelector.addEventListener('click', () => {
    langSelector.classList.toggle('active');
  });

  window.addEventListener('click', (event) => {
    if (!event.target.closest('.lang-selector')) {
      langSelector.classList.remove('active');
    }
  });
}
