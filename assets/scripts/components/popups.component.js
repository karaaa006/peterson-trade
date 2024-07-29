const scalpingPopup = document.querySelector('#scalping-popup');

if (scalpingPopup) {
  const playBtn = document.querySelector('.scalping__play-btn');

  const scalpingPopupCloseBtn =
    scalpingPopup.querySelector('.popup__close-btn');

  scalpingPopupCloseBtn.addEventListener('click', () => {
    console.log('is-open');
    scalpingPopup.classList.remove('is-open');
  });

  playBtn.addEventListener('click', () => {
    scalpingPopup.classList.add('is-open');
  });

  scalpingPopup.addEventListener('click', (e) => {
    if (e.target === scalpingPopup) {
      scalpingPopup.classList.remove('is-open');
    }
  });
}
