const arrowBtn = document.querySelector('#drop-down-arrow');

arrowBtn.addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  const arrow = arrowBtn.querySelector('.arrow');
  const logoSection = document.querySelector('.logo-section');
  const searchBox = document.querySelector('.search-box');
  menu.classList.toggle('open');
  arrow.classList.toggle('open');
  if (logoSection) {
    logoSection.classList.toggle('logo-section-open');
  }

  if (searchBox) {
    searchBox.classList.toggle('search-box-open');
  }
});
