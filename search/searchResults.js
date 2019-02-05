const searchData = [
  {
    imgSrc: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1907&q=80',
    type: 'LAPTOP',
    product: 'A really good laptop',
    description: 'What about it',
    numberOfRatings: 3,
    users: 47,
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    type: 'HEADPHONES',
    product: 'Some really good headphones',
    description: 'What about it',
    numberOfRatings: 4,
    users: 20,
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
    type: 'VOICE SPEAKER',
    product: 'A really good speaker',
    description: 'What about it',
    numberOfRatings: 5,
    users: 180,
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1486611367184-17759508999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80',
    type: 'DRONE',
    product: 'A really good drone',
    description: 'What about it',
    numberOfRatings: 2,
    users: 80,
  },
];

const searchBox = document.querySelector('#searchInput');

const query = window.location.search.substring(1);
const parsedQuery = JSON.parse(`{"${decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`).term;
searchBox.setAttribute('value', parsedQuery);

const exploreHeader = document.querySelector('#exploreHeader');
const searchResults = document.querySelector('#searchResults');

function renderResults(data, searchTerm) {
  searchResults.innerHTML = '';
  exploreHeader.textContent = `Explore ${searchTerm.toLowerCase()}`;
  const filteredData = data.filter((each) => {
    const type = each.type.split(' ').map(item => item.toLowerCase());
    if (type.includes(searchTerm)) {
      return true;
    }
    return false;
  });

  filteredData.forEach(each => searchResults.appendChild(CardMaker(each))); //eslint-disable-line
}

searchBox.addEventListener('change', (e) => {
  const { value } = e.target;
  renderResults(searchData, value);
});


renderResults(searchData, parsedQuery);
