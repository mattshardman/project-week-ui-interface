//eslint-disable-line

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

const data = [
  {
    id: 1,
    imgSrc:
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1907&q=80',
    type: 'LAPTOP',
    product: 'A really good laptop',
    description: '£30/day',
    numberOfRatings: 3,
    users: 47,
  },
  {
    id: 2,
    imgSrc:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    type: 'HEADPHONES',
    product: 'Some really good headphones',
    description: '£22/day',
    numberOfRatings: 4,
    users: 20,
  },
  {
    id: 3,
    imgSrc:
        'https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
    type: 'VOICE SPEAKER',
    product: 'A really good speaker',
    description: '£9/day',
    numberOfRatings: 5,
    users: 180,
  },
  {
    id: 4,
    imgSrc:
        'https://images.unsplash.com/photo-1486611367184-17759508999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80',
    type: 'DRONE',
    product: 'A really good drone',
    description: '£12/day',
    numberOfRatings: 2,
    users: 80,
  },
];

const exploreCardMakerFunc = ExploreCardMaker; //eslint-disable-line
const CardMakerFunc = ProductCardMaker;//eslint-disable-line

const exploreTileSection = document.querySelector('.tile-wrapper');
exploreTilesData.forEach(tile => exploreTileSection.appendChild(exploreCardMakerFunc(tile)));

// render-product cards
const productCards = document.querySelector('#productCards');
data.forEach(each => productCards.appendChild(new CardMakerFunc(each).render()));
