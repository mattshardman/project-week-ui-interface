function CardMaker({
  id, imgSrc, type, product, description, numberOfRatings, users,
}) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const img = document.createElement('div');
  img.classList.add('img');
  img.style.backgroundImage = `url("${imgSrc}")`;

  const heartDiv = document.createElement('button');
  heartDiv.classList.add('heart');
  const heart = document.createElement('i');
  heart.classList.add('far', 'fa-heart');

  heartDiv.appendChild(heart);
  img.appendChild(heartDiv);

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

  card.addEventListener('click', () => {
    heartDiv.classList.toggle('liked');
    console.log(id);
  });

  return card;
}
