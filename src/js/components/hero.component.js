const heroSection = document.querySelector('.hero-section');

if (heroSection) {
  const hero = document.querySelector('.hero');

  const setPaddingByAspectRation = () => {
    const heroSectionHeight = heroSection.offsetHeight;
    const heroSectionWidth = heroSection.offsetWidth;
    const aspectRatio = heroSectionWidth / heroSectionHeight;
    console.log(aspectRatio);
    hero.setAttribute(
      'style',
      `--padding-top: ${(heroSectionHeight * 0.2) / aspectRatio}px`
    );
  };

  setPaddingByAspectRation();

  window.addEventListener('resize', setPaddingByAspectRation);
}
