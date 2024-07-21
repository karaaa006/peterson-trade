import Swiper, { EffectFade } from 'swiper';

const tabBtnsArray = document.querySelectorAll('.achievements__tabs-nav-item');
const tabBtns = [...tabBtnsArray].reduce((acc, btn) => {
  acc[btn.dataset.tabId] = btn;
  return acc;
}, {});
let currentTabId = document.querySelector('.achievements__tabs-nav-item.active')
  .dataset.tabId;

const screenshotNavButnPrev = document.querySelector(
  '.achievements__slider-nav-btn.prev'
);
const screenshotNavButnNext = document.querySelector(
  '.achievements__slider-nav-btn.next'
);

const tabSwiper = new Swiper('.achievements__tab-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true,
  },
  modules: [EffectFade],
});

const screenshotSwiperArray = new Swiper('.achievements__screenshot-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  rewind: true,
});

const screenshotSwipers = screenshotSwiperArray.reduce((acc, swiper) => {
  const { tabId } = swiper.el.closest('.achievements__bottom').dataset;

  acc[tabId] = swiper;

  return acc;
}, {});

screenshotNavButnPrev.addEventListener('click', () => {
  screenshotSwipers[currentTabId].slidePrev();
});

screenshotNavButnNext.addEventListener('click', () => {
  screenshotSwipers[currentTabId].slideNext();
});

const setActiveTab = (tab) => {
  const tabToActivate = tabBtns[tab];
  const activeTab = tabBtns[currentTabId];

  activeTab.classList.remove('active');
  tabToActivate.classList.add('active');

  tabSwiper.slideTo(tab);

  currentTabId = tab;
};

Object.values(tabBtns).forEach((btn) => {
  const { tabId } = btn.dataset;

  btn.addEventListener('click', () => {
    setActiveTab(tabId);
  });
});
