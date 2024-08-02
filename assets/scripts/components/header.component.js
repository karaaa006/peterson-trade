const header = document.querySelector('.header');
const dropMenu = document.querySelector('.header__drop-menu');
const deskBurger = document.querySelector('#desk-burger');
const mobBurger = document.querySelector('#mob-burger');
const mobMenu = document.querySelector('.header__mob-menu');

let headerHeight = header.offsetHeight;

header.style.setProperty('--header-height', `${headerHeight}px`);

if (deskBurger && dropMenu) {
  deskBurger.addEventListener('click', () => {
    dropMenu.classList.toggle('active');
    deskBurger.classList.toggle('active');
  });
}

if (mobBurger && mobMenu) {
  mobBurger.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
    mobBurger.classList.toggle('active');
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
    deskBurger.classList.remove('active');
  }
});

window.addEventListener('resize', () => {
  headerHeight = header.offsetHeight;

  header.style.setProperty('--header-height', `${headerHeight}px`);
});

const langSelectors = document.querySelectorAll('.lang-selector');

langSelectors.forEach((langSelector) => {
  langSelector.addEventListener('click', () => {
    langSelector.classList.toggle('active');
  });

  window.addEventListener('click', (event) => {
    if (!event.target.closest('.lang-selector')) {
      langSelector.classList.remove('active');
    }
  });
});
