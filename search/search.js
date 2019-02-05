const searchText = document.querySelector('#search');
const searchButton = document.querySelector('#search-button');

let term = '';

searchText.addEventListener('change', (e) => {
  term = e.target.value;
});

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  //   searchTag.setAttribute('href', 'hello');
  window.location.href = `search.html?term=${term}`;
});
