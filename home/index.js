// from util/utilFunctions - gets product data from API
const getData = getDataFunc; //eslint-disable-line

// data from homepage "Explore category" tiles
const exploreTilesData = [
  {
    title: 'Phones',
    photo: 'https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    href: 'search.html?term=phones',
  },
  {
    title: 'Laptops',
    photo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    href: 'search.html?term=laptops',
  },
  {
    title: 'Cameras',
    photo: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
    href: 'search.html?term=cameras',
  },
];

/*
  from components/explore-card/ExploreCard.js
  returns explore card element for "Explore category" tiles
  element returned has the following structure:
    <div class="tile">
      <div
        class="img"
        style="background-image: photo>
      </div>
      <div class="title">title</div>
    </div>
*/
const exploreCardMakerFunc = ExploreCardMaker; //eslint-disable-line
/*
  from components/product-card/ProductCard.js
  returns product card element for "Top Rated products section"
  element returned has the following structure
*/
const CardMakerFunc = ProductCardMaker;//eslint-disable-line

// select element to append explore tiles
const exploreTileSection = document.querySelector('.tile-wrapper');

/*
  iterate through array, creates a new "explore card"
  for each item in the array and appends
*/

exploreTilesData.forEach(tile => exploreTileSection.appendChild(exploreCardMakerFunc(tile)));

// select element to append product tiles to
const productCards = document.querySelector('#productCards');

// calls get data async function to pull project data from api (returns an array)
getData()
  .then((data) => {
    data
      // filters array to find high rated products
      .filter(card => card.numberOfRatings > 3)
      // slices array so only 8 elements are returned
      .slice(0, 8)
      /*
        iterate through array, creates a new "product card"
        for each item in the array and appends
      */
      .forEach((each) => {
        productCards.appendChild(new CardMakerFunc(each).render());
      });
  });
