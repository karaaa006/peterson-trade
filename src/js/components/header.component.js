const header = document.querySelector('.header');
const dropMenu = document.querySelector('.header__drop-menu');
const deskBurger = document.querySelector('#desk-burger');
const mobBurger = document.querySelector('#mob-burger');
const mobMenu = document.querySelector('.header__mob-menu');
const body = document.querySelector('body');

let headerHeight = header.offsetHeight;

header.style.setProperty('--header-height', `${headerHeight}px`);

if (deskBurger && dropMenu) {
  const dropMenuLinks = dropMenu.querySelectorAll('.header__drop-menu-link');

  deskBurger.addEventListener('click', () => {
    dropMenu.classList.toggle('active');
    deskBurger.classList.toggle('active');
  });

  dropMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      dropMenu.classList.remove('active');
      deskBurger.classList.remove('active');
    });
  });
}

if (mobBurger && mobMenu) {
  const mobMenuLinks = mobMenu.querySelectorAll('.header__mob-menu-link');

  mobBurger.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
    mobBurger.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  mobMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobMenu.classList.remove('active');
      mobBurger.classList.remove('active');
      body.classList.toggle('no-scroll');
    });
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
