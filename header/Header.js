const arrowBtn = document.querySelector('#drop-down-arrow');

arrowBtn.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    const arrow = arrowBtn.querySelector('.arrow');
    menu.classList.toggle('open');
    arrow.classList.toggle('open');
});