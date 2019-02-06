const arrowBtn = document.querySelector('#drop-down-arrow');

arrowBtn.addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  const arrow = arrowBtn.querySelector('.arrow');
  const logoSection = document.querySelector('.logo-section');
  menu.classList.toggle('open');
  arrow.classList.toggle('open');
  logoSection.classList.toggle('logo-section-open');
});
