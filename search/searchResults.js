const allData = [
  {
    id: 1,
    imgSrc:
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1907&q=80',
    type: 'LAPTOP',
    product: 'A really good laptop',
    description: 'What about it',
    numberOfRatings: 3,
    users: 47,
  },
  {
    id: 2,
    imgSrc:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    type: 'HEADPHONES',
    product: 'Some really good headphones',
    description: 'What about it',
    numberOfRatings: 4,
    users: 20,
  },
  {
    id: 3,
    imgSrc:
        'https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
    type: 'VOICE SPEAKER',
    product: 'A really good speaker',
    description: 'What about it',
    numberOfRatings: 5,
    users: 180,
  },
  {
    id: 4,
    imgSrc:
        'https://images.unsplash.com/photo-1486611367184-17759508999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80',
    type: 'DRONE',
    product: 'A really good drone',
    description: 'What about it',
    numberOfRatings: 2,
    users: 80,
  },
  {
    id: 5,
    imgSrc:
        'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    type: 'DRONE',
    product: 'A really good drone',
    description: 'What about it',
    numberOfRatings: 3,
    users: 80,
  },
  {
    id: 6,
    imgSrc:
        'https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    type: 'DRONE',
    product: 'A really good drone',
    description: 'What about it',
    numberOfRatings: 5,
    users: 80,
  },
  {
    id: 7,
    imgSrc:
        'https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    type: 'DRONE',
    product: 'A really good drone',
    description: 'What about it',
    numberOfRatings: 4,
    users: 80,
  },
  {
    id: 8,
    imgSrc:
        'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    type: 'DRONE',
    product: 'A really good drone',
    description: 'What about it',
    numberOfRatings: 4,
    users: 80,
  },
  {
    id: 9,
    imgSrc:
        'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
    type: 'CAMERA',
    product: 'A really good camera',
    description: 'What about it',
    numberOfRatings: 4,
    users: 80,
  },
  {
    id: 10,
    imgSrc:
        'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
    type: 'CAMERA',
    product: 'A really good camera',
    description: 'What about it',
    numberOfRatings: 3,
    users: 80,
  },
  {
    id: 11,
    imgSrc:
        'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    type: 'CAMERA',
    product: 'A really good camera',
    description: 'What about it',
    numberOfRatings: 5,
    users: 80,
  },
  {
    id: 12,
    imgSrc:
        'https://images.unsplash.com/photo-1488684430052-f2d92fb178c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    type: 'CAMERA',
    product: 'A really good camera',
    description: 'What about it',
    numberOfRatings: 5,
    users: 80,
  },
];

const searchData = allData; //eslint-disable-line

function queryStringToJSON(queryString) {
  if (queryString.indexOf('?') > -1) {
    queryString = queryString.split('?')[1];
  }
  const pairs = queryString.split('&');
  const result = {};
  pairs.forEach((pair) => {
    pair = pair.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });
  return result;
}

function formatSearchTerm(input) {
  const char0 = input.charAt().toUpperCase();
  const restOfString = input.toLowerCase().slice(1);
  const s = restOfString.charAt(restOfString.length - 1) === 's' ? '' : 's';
  const result = `${char0}${restOfString}${s}`;
  return result;
}

const filterData = (data, searchTerm) => data.filter((each) => {
  const type = each.type.split(' ').map(item => item.toLowerCase());
  const match = searchTerm.includes(type) || type.includes(searchTerm);
  if (match) {
    return true;
  }

  return false;
});

function createExploreCards(data) {
  const makeCards = ExploreCardMaker; //eslint-disable-line
  const cardData = [{
    title: 'Rent',
    photo: data[0].imgSrc,
  },
  {
    title: 'Instructors',
    photo:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  }];

  const cards = cardData.map(item => makeCards(item));

  return cards;
}

function createElements(data, searchTerm) {
  const makeCards = ProductCardMaker; //eslint-disable-line
  const formattedSearchTerm = formatSearchTerm(searchTerm);

  const searchTermExists = searchTerm === 'please enter a search term';
  const headerText = searchTermExists ? 'You did not enter a search term' : `Explore ${formattedSearchTerm}`;

  const filteredSearchResults = filterData(data, searchTerm);
  const exploreCards = createExploreCards(filteredSearchResults);
  const productCards = filteredSearchResults.map(each => makeCards(each));

  return {
    headerText,
    exploreCards,
    productCards,
  };
}

function setInitialSearch(element, searchTerm) {
  if (searchTerm) {
    return element.setAttribute('value', searchTerm);
  }
  return null;
}

function setInitialDates(element, date, date2) {
  const months = [
    'jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  const el = element;
  const dateArr = date.split('-');
  const dateArr2 = date2.split('-');
  if (!date || !date2) {
    el.textContent = 'date';
  } else {
    el.textContent = `${dateArr[2]} ${months[Number(dateArr[1] - 1)]} - ${dateArr2[2]} ${months[Number(dateArr2[1] - 1)]}`;
  }
}

function createElementsAndRenderToDom(data, searchTerm) {
  const header = document.querySelector('#exploreHeader');
  const renderResults = (elements, id) => {
    const div = document.querySelector(id);
    div.innerHTML = '';
    if (searchTerm) {
      elements.forEach(item => div.appendChild(item));
    }
  };

  console.log(searchTerm);
  if (searchTerm) {
    const { headerText, exploreCards, productCards } = createElements(data, searchTerm);
    console.log(headerText);
    header.textContent = headerText;
    renderResults(exploreCards, '.explore-tile-wrapper', searchTerm);
    renderResults(productCards, '#searchResults', searchTerm);
  } else {
    header.textContent = 'You didn\'t enter a search term';
    renderResults(null, '.explore-tile-wrapper', searchTerm);
    renderResults(null, '#searchResults', searchTerm);
  }
}

(function initialRender(data) {
  const searchBox = document.querySelector('#searchInput');
  const dateBox = document.querySelector('#dateBox');
  const queryJSON = queryStringToJSON(document.location.search);
  const parsedQuery = queryJSON.term;
  setInitialSearch(searchBox, parsedQuery);
  setInitialDates(dateBox, queryJSON.dateFrom, queryJSON.dateTo);
  createElementsAndRenderToDom(data, parsedQuery);
}(searchData));

(function reRenderOnSearch(data) {
  const searchBox = document.querySelector('#searchInput');

  searchBox.addEventListener('change', (e) => {
    const { value } = e.target;
    searchBox.setAttribute('value', value);
    createElementsAndRenderToDom(data, value);
  });
}(searchData));
