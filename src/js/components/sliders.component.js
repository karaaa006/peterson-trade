import Swiper from 'swiper';
import { Navigation } from 'swiper';

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
