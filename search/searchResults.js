const query = window.location.search.substring(1);
const parsedQuery = JSON.parse(`{"${decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`);

const searchBox = document.querySelector('#searchInput');
searchBox.setAttribute('value', parsedQuery.term);

const exploreHeader = document.querySelector('#exploreHeader');
exploreHeader.textContent = `Explore ${parsedQuery.term.toLowerCase()}`;
