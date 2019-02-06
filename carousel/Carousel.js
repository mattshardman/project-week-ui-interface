const cards = [
  {
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1907&q=80',
    title: 'Some product',
    description: '£500',
  },
  {
    img: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
    title: 'Some product',
    description: '£300',
  },
  {
    img: 'https://images.unsplash.com/photo-1486611367184-17759508999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80',
    title: 'Some product',
    description: '£400',
  },
  {
    img: 'https://images.unsplash.com/photo-1535006600179-d034a606ade2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    title: 'Some product',
    description: '£550',
  },
  {
    img: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Some product',
    description: '£230',
  },
  {
    img: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    title: 'Some product',
    description: '£500',
  },
  {
    img: 'https://images.unsplash.com/photo-1488684430052-f2d92fb178c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    title: 'Some product',
    description: '£300',
  },
  {
    img: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Some product',
    description: '£400',
  },
  {
    img: 'https://images.unsplash.com/photo-1536632155857-9c7dba77c29d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
    title: 'Some product',
    description: '£550',
  },
  {
    img: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
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
  card.style.backgroundImage = `url("${img})`;

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
