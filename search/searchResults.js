const getData = getDataFunc; //eslint-disable-line
const formatSearchTerm = formatSearchTermFunc; //eslint-disable-line
const filterData = filterDataFunc; //eslint-disable-line
const queryStringToJSON = queryStringToJSONFunc; //eslint-disable-line

function createExploreCards(data) {
  const makeCards = ExploreCardMaker; //eslint-disable-line
  const cardData = [{
    title: 'Rent',
    photo: data[0].imgSrc,
    href: '',
  },
  {
    title: 'Instructors',
    photo:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    href: '',
  }];

  // creates to explore cards for above data
  const cards = cardData.map(item => makeCards(item));

  return cards;
}

function createElements(data, searchTerm, numOfDays) {
  // from ProductCard component - returns product card element
  const MakeCards = ProductCardMaker; //eslint-disable-line
  // calls function to format string for Explore section
  const formattedSearchTerm = formatSearchTerm(searchTerm);

  // checks if a search was made
  const searchTermExists = searchTerm === 'please enter a search term';
  // sets explore section header depending on whether search term exists
  const headerText = searchTermExists ? 'You did not enter a search term' : `Explore ${formattedSearchTerm}`;

  // filters data returned from API to only include results that match the search term
  const filteredSearchResults = filterData(data, searchTerm);
  // calls function to create array of explore cards
  const exploreCards = createExploreCards(filteredSearchResults);
  // returns an array of product cards based on the filtered data returned from the api
  const productCards = filteredSearchResults
    .map(each => new MakeCards(each, true, numOfDays).render());

  // returns text for header, cards for explore section and result cards based on search term
  return {
    headerText,
    exploreCards,
    productCards,
  };
}

function findNumOfDays(date, date2) {
  // returns the difference between the two dates in days
  const d = new Date(date);
  const d2 = new Date(date2);
  const result = ((d2 - d) / 1000 / 60 / 60 / 24);
  return result;
}

function setInitialSearch(element, searchTerm) {
  if (searchTerm) {
    // if the search term exists set the search input field to the searcht term
    element.setAttribute('value', searchTerm);
  }
}

function setInitialDates(element, date, date2) {
  const months = [
    'jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const el = element;

  if (!date || !date2) {
    // if there are no dates in query string return the string date
    el.textContent = 'Date';
  } else {
    // if both dates appear in query string return a formatted string of the two dates
    const dateArr = date.split('-');
    const dateArr2 = date2.split('-');
    el.textContent = `${dateArr[2]} ${months[Number(dateArr[1] - 1)]} - ${dateArr2[2]} ${months[Number(dateArr2[1] - 1)]}`;
  }
}

function createElementsAndRenderToDom(data, searchTerm, numOfDays) {
  // selects header element or explore section on results page
  const header = document.querySelector('#exploreHeader');

  // append items to DOM when called from below
  const renderResults = (elements, id) => {
    const div = document.querySelector(id);
    // clear previous results
    div.innerHTML = '';
    if (searchTerm) {
      // if search term exists render relevant results
      elements.forEach(item => div.appendChild(item));
    }
  };

  if (searchTerm) {
    // call create element function with data returned from api and search term from query
    const { headerText, exploreCards, productCards } = createElements(data, searchTerm, numOfDays);
    // set explore header to text returned from createElements function
    header.textContent = headerText;
    // call above renderResults function with elements returned from createElements function
    // populates explore cards in "Explore search term" section
    renderResults(exploreCards, '.explore-tile-wrapper', searchTerm);
    // populates result cards with relevant products for "Recommended products" section
    renderResults(productCards, '#searchResults', searchTerm);
  } else {
    header.textContent = 'You didn\'t enter a search term';
    renderResults(null, '.explore-tile-wrapper', searchTerm);
    renderResults(null, '#searchResults', searchTerm);
  }
}

function initialRender(data) {
  // selectors for adding info to search box and dateBox, and adding event listener to search form
  const searchInput = document.querySelector('#searchInput');
  const dateBox = document.querySelector('#dateBox');
  const searchForm = document.querySelector('#searchForm');

  // for utils/UtilFunctions.js - pulls out values from query string and returns as JSON
  const queryJSON = queryStringToJSON(document.location.search);
  // search term or empty string if search term is undefined
  const parsedQuery = queryJSON.term || '';
  // utils/UtilFunctions.js - finds the difference (in days) between two dates in query string
  const numOfDays = findNumOfDays(queryJSON.dateFrom, queryJSON.dateTo);

  // sets search input field in heading to search term from query string
  setInitialSearch(searchInput, parsedQuery);
  // sets date field in heading to dates from query string
  setInitialDates(dateBox, queryJSON.dateFrom, queryJSON.dateTo);
  // calls function to create cards for search results
  createElementsAndRenderToDom(data, parsedQuery.toLowerCase(), numOfDays);

  // add event listened for if search field in header is updated
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const { value } = searchInput;
    // calls function to create cards for new search results
    createElementsAndRenderToDom(data, value.toLowerCase());
  });

  const closeItem = document.querySelector('#closeItem');

  closeItem.addEventListener('click', () => {
    const itemAdded = document.querySelector('#itemAdded');
    itemAdded.classList.toggle('item-added-open');
  });
}

/*
 from util/utilFunctions.js -
 async function calls api to return json product data. Returns all data as small file.
 then calls initial render once get data return value
 */
getData().then(data => initialRender(data));
