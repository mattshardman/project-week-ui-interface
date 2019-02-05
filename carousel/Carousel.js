const cards = [
  {
    img: 'url(https://a0.muscache.com/im/pictures/998b4270-25d7-4850-8ccf-4350b9a5ab05.jpg?aki_policy=large)',
    title: 'Some product',
    description: '£500',
  },
  {
    img: 'url(https://a0.muscache.com/im/pictures/60145c65-7c36-4ac5-8129-6ae9a0d27a81.jpg?aki_policy=large)',
    title: 'Some product',
    description: '£300',
  },
  {
    img: 'url(https://a0.muscache.com/im/pictures/6729455e-af21-4dc3-bfdf-332393d407a8.jpg?aki_policy=large)',
    title: 'Some product',
    description: '£400',
  },
  {
    img: 'url(https://a0.muscache.com/im/pictures/82af5bc4-ed5b-44d9-9209-ac0f2fbf8986.jpg?aki_policy=large)',
    title: 'Some product',
    description: '£550',
  },
  {
    img: 'url(https://a0.muscache.com/im/pictures/6db93b37-3d4b-49c0-af00-c184a9dd6305.jpg?aki_policy=large)',
    title: 'Some product',
    description: '£230',
  },
  {
    img: 'url(https://a0.muscache.com/im/pictures/998b4270-25d7-4850-8ccf-4350b9a5ab05.jpg?aki_policy=large)',
    title: 'Some product',
    description: '£500',
  },
  {
    img: 'url(https://a0.muscache.com/im/pictures/60145c65-7c36-4ac5-8129-6ae9a0d27a81.jpg?aki_policy=large)',
    title: 'Some product',
    description: '£300',
  },
  {
    img: 'url(https://a0.muscache.com/im/pictures/6729455e-af21-4dc3-bfdf-332393d407a8.jpg?aki_policy=large)',
    title: 'Some product',
    description: '£400',
  },
  {
    img: 'url(https://a0.muscache.com/im/pictures/82af5bc4-ed5b-44d9-9209-ac0f2fbf8986.jpg?aki_policy=large)',
    title: 'Some product',
    description: '£550',
  },
  {
    img: 'url(https://a0.muscache.com/im/pictures/6db93b37-3d4b-49c0-af00-c184a9dd6305.jpg?aki_policy=large)',
    title: 'Some product',
    description: '£230',
  },
];

const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const carousel = document.querySelector('.carousel');

function createCard({ title, description, img }, element) {
  const card = document.createElement('div');
  card.classList.add('card');

  const h1 = document.createElement('h1');
  h1.classList.add('card-title');
  h1.textContent = title;
  card.appendChild(h1);

  const p = document.createElement('p');
  p.classList.add('card-description');
  p.textContent = description;
  card.appendChild(p);
  card.style.backgroundImage = img;

  element.appendChild(card);
}

function move(element) {
  let counter = 0;
  return function slide(right) {
    const direction = right ? -10 : 10;

    element.style.transform = `translateX(${counter + direction}%)`;
    counter += direction;

    if (right && counter <= -50) {
      rightBtn.style.display = 'none';
    } else {
      rightBtn.style.display = 'flex';
    }

    if (counter) {
      leftBtn.style.display = 'flex';
    } else {
      leftBtn.style.display = 'none';
    }
  };
}

const slide = move(carousel);

cards.map(cardData => createCard(cardData, carousel));

leftBtn.addEventListener('click', () => slide(false));
rightBtn.addEventListener('click', () => slide(true));
