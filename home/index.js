const getData = getDataFunc; //eslint-disable-line

const exploreTilesData = [
  {
    title: 'Phones',
    photo: 'https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    title: 'Laptops',
    photo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
  },
  {
    title: 'Cameras',
    photo: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
  },
];

const exploreCardMakerFunc = ExploreCardMaker; //eslint-disable-line
const CardMakerFunc = ProductCardMaker;//eslint-disable-line

const exploreTileSection = document.querySelector('.tile-wrapper');
exploreTilesData.forEach(tile => exploreTileSection.appendChild(exploreCardMakerFunc(tile)));

// render-product cards
const productCards = document.querySelector('#productCards');
getData()
  .then((data) => {
    data
      .filter(card => card.numberOfRatings > 3)
      .slice(0, 8)
      .forEach((each) => {
        productCards.appendChild(new CardMakerFunc(each).render());
      });
  });
