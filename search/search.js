const searchText = document.querySelector('#search');
const dateTo = document.querySelector('#dateTo');
const dateFrom = document.querySelector('#dateFrom');
const searchButton = document.querySelector('#search-button');

(function setQueryString() {
  const data = {
    term: '',
    dateFrom: '',
    dateTo: '',
  };

  searchText.addEventListener('change', (e) => {
    data.term = e.target.value;
  });

  dateTo.addEventListener('change', (e) => {
    data.dateTo = e.target.value;
  });

  dateFrom.addEventListener('change', (e) => {
    data.dateFrom = e.target.value;
  });

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = `search.html?term=${data.term}&dateFrom=${data.dateFrom}&dateTo=${data.dateTo}`;
  });
}());
