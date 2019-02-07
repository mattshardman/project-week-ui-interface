const getData = getDataFunc; //eslint-disable-line
const formatSearchTerm = formatSearchTermFunc; //eslint-disable-line
const filterData = filterDataFunc; //eslint-disable-line
const queryStringToJSON = queryStringToJSONFunc; //eslint-disable-line

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

function createElements(data, searchTerm, numOfDays) {
  const MakeCards = ProductCardMaker; //eslint-disable-line
  const formattedSearchTerm = formatSearchTerm(searchTerm);

  const searchTermExists = searchTerm === 'please enter a search term';
  const headerText = searchTermExists ? 'You did not enter a search term' : `Explore ${formattedSearchTerm}`;

  const filteredSearchResults = filterData(data, searchTerm);
  const exploreCards = createExploreCards(filteredSearchResults);
  const productCards = filteredSearchResults
    .map(each => new MakeCards(each, true, numOfDays).render());

  return {
    headerText,
    exploreCards,
    productCards,
  };
}

function findNumOfDays(date, date2) {
  const d = new Date(date);
  const d2 = new Date(date2);
  const result = ((d2 - d) / 1000 / 60 / 60 / 24);
  return result;
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
  if (!date || !date2) {
    el.textContent = 'Date';
  } else {
    const dateArr = date.split('-');
    const dateArr2 = date2.split('-');
    el.textContent = `${dateArr[2]} ${months[Number(dateArr[1] - 1)]} - ${dateArr2[2]} ${months[Number(dateArr2[1] - 1)]}`;
  }
}

function createElementsAndRenderToDom(data, searchTerm, numOfDays) {
  const header = document.querySelector('#exploreHeader');

  const renderResults = (elements, id) => {
    const div = document.querySelector(id);
    div.innerHTML = '';
    if (searchTerm) {
      elements.forEach(item => div.appendChild(item));
    }
  };

  if (searchTerm) {
    const { headerText, exploreCards, productCards } = createElements(data, searchTerm, numOfDays);
    header.textContent = headerText;
    renderResults(exploreCards, '.explore-tile-wrapper', searchTerm);
    renderResults(productCards, '#searchResults', searchTerm);
  } else {
    header.textContent = 'You didn\'t enter a search term';
    renderResults(null, '.explore-tile-wrapper', searchTerm);
    renderResults(null, '#searchResults', searchTerm);
  }
}

function initialRender(data) {
  const searchInput = document.querySelector('#searchInput');
  const dateBox = document.querySelector('#dateBox');
  const searchForm = document.querySelector('#searchForm');

  const queryJSON = queryStringToJSON(document.location.search);
  const parsedQuery = queryJSON.term || '';
  const numOfDays = findNumOfDays(queryJSON.dateFrom, queryJSON.dateTo);

  setInitialSearch(searchInput, parsedQuery);
  setInitialDates(dateBox, queryJSON.dateFrom, queryJSON.dateTo);
  createElementsAndRenderToDom(data, parsedQuery.toLowerCase(), numOfDays);

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const { value } = searchInput;
    createElementsAndRenderToDom(data, value.toLowerCase());
  });
}

getData().then(data => initialRender(data));
