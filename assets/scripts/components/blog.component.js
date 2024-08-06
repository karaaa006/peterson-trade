const blogSection = document.querySelector('.blog-section');

if (blogSection) {
  const showMoreBtn = blogSection.querySelector('.blog-section__btn');
  const pageSize = window.innerWidth > 768 ? 6 : 3;

  const initPagination = () => {
    const blogCards = blogSection.querySelectorAll('.blog-card');

    blogCards.forEach((card, index) => {
      if (index >= pageSize) {
        card.classList.add('hidden');
      }
    });

    if (blogCards.length <= pageSize) {
      showMoreBtn.classList.add('hidden');
    }
  };

  initPagination();

  const nextPage = () => {
    const blogCards = blogSection.querySelectorAll('.blog-card.hidden');

    [...blogCards].slice(0, pageSize).forEach((card) => {
      card.classList.remove('hidden');
    });

    if (blogCards.length <= pageSize) {
      showMoreBtn.classList.add('hidden');
    }
  };

  showMoreBtn.addEventListener('click', nextPage);
}
