import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const scalpingPopupSlider = document.querySelector('.scalping-videos-slider');
if (scalpingPopupSlider) {
  new Swiper(scalpingPopupSlider, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.scalping-videos-slider__nav-btn.next',
      prevEl: '.scalping-videos-slider__nav-btn.prev',
    },
    modules: [Navigation],
  });
}

const reviewsSlider = document.querySelector('.reviews-slider');

if (reviewsSlider) {
  new Swiper(reviewsSlider, {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 56,
    loop: true,
    loopAdditionalSlides: 1,
    allowTouchMove: false,
    navigation: {
      nextEl: '.reviews-slider__btn.next',
      prevEl: '.reviews-slider__btn.prev',
    },
    modules: [Navigation],
    initialSlide: 1,
    breakpoints: {
      768: {
        spaceBetween: 50,
      },
      1280: {
        spaceBetween: 55,
      },
      1440: {
        spaceBetween: 60,
      },
      1560: {
        spaceBetween: 116,
      },
    },
  });
}
