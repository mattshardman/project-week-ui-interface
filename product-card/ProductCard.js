const data = [
  {
    imgSrc: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1907&q=80',
    type: 'LAPTOP',
    product: 'A really good camera',
    description: 'What about it',
    numberOfRatings: 3,
    users: 47,
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    type: 'HEADPHONES',
    product: 'A really good camera',
    description: 'What about it',
    numberOfRatings: 4,
    users: 20,
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
    type: 'VOICE SPEAKER',
    product: 'A really good camera',
    description: 'What about it',
    numberOfRatings: 5,
    users: 180,
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1486611367184-17759508999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80',
    type: 'DRONE',
    product: 'A really good camera',
    description: 'What about it',
    numberOfRatings: 2,
    users: 80,
  },
];

const productCards = document.querySelector('#productCards');

function CardMaker({
  imgSrc, type, product, description, numberOfRatings, users,
}) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const img = document.createElement('div');
  img.classList.add('img');
  img.style.backgroundImage = `url("${imgSrc}")`;
  card.appendChild(img);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  [
    { element: 'h3', text: type },
    { element: 'h2', text: product },
    { element: 'p', text: description },
  ].forEach((each) => {
    const el = document.createElement(each.element);
    el.textContent = each.text;
    productInfo.appendChild(el);
  });

  const rating = document.createElement('div');
  rating.classList.add('rating');

  const ratingNum = document.createElement('span');
  ratingNum.textContent = numberOfRatings;
  rating.appendChild(ratingNum);

  const stars = document.createElement('div');
  stars.classList.add('stars');
  [...Array(numberOfRatings)].forEach(() => {
    const star = document.createElement('i');
    star.classList.add('material-icons');
    star.textContent = 'star';
    stars.appendChild(star);
    rating.appendChild(stars);
  });


  const userNumber = document.createElement('span');
  userNumber.classList.add('user-num');
  userNumber.textContent = users;
  rating.appendChild(userNumber);

  productInfo.appendChild(rating);

  card.appendChild(productInfo);

  return card;
}

data.forEach(each => productCards.appendChild(CardMaker(each)));
