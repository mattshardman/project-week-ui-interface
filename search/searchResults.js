const searchData = products; //eslint-disable-line

function parseQuery(query) {
  const result = JSON.parse(
    `{"${decodeURI(query)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')}"}`,
  ).term || 'please enter a search term';
  return result;
}

function setInitialSearch(element, parsedQuery) {
  element.setAttribute('value', parsedQuery);
}

function renderResults(data, searchTerm) {
  const exploreHeader = document.querySelector('#exploreHeader');
  const searchResults = document.querySelector('#searchResults');
  const exploreTiles = document.querySelector('.explore-tile-wrapper');

  searchResults.innerHTML = '';
  exploreTiles.innerHTML = '';

  if (searchTerm === 'please enter a search term') {
    exploreHeader.textContent = 'You did not enter a search term';
    return null;
  }

  function formatSearchTerm(input) {
    const char0 = input.charAt().toUpperCase();
    const restOfString = input.toLowerCase().slice(1);
    const s = restOfString.charAt(restOfString.length - 1) === 's' ? '' : 's';
    const result = `${char0}${restOfString}${s}`;
    return result;
  }

  const formattedSearchTerm = formatSearchTerm(searchTerm);

  exploreHeader.textContent = `Explore ${formattedSearchTerm}`;
  const filteredData = data.filter((each) => {
    const type = each.type.split(' ').map(item => item.toLowerCase());
    if (searchTerm.includes(type)) {
      return true;
    }

    if (type.includes(searchTerm)) {
      return true;
    }

    return false;
  });

  const thing = ExploreCardMaker({ //eslint-disable-line
    title: 'Rent',
    photo: filteredData[0].imgSrc,
  });

  const thing2 = ExploreCardMaker({ //eslint-disable-line
    title: 'Instructors',
    photo:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  });

  exploreTiles.appendChild(thing);
  exploreTiles.appendChild(thing2);
  filteredData.forEach(each => searchResults.appendChild(CardMaker(each))); //eslint-disable-line
  return null;
}

(function searchResults() {
  const searchBox = document.querySelector('#searchInput');
  const query = window.location.search.substring(1);

  const parsedQuery = parseQuery(query);

  searchBox.addEventListener('change', (e) => {
    const { value } = e.target;
    renderResults(searchData, value);
  });

  setInitialSearch(searchBox, parsedQuery);
  renderResults(searchData, parsedQuery);
}());
