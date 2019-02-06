function ProductElementMaker(arr) {
  const result = arr.reduce((acc, {
    name, type, classes, styles, textContent,
  }) => {
    const el = document.createElement(type);
    if (classes) {
      classes.forEach(className => el.classList.add(className));
    }

    if (styles) {
      styles.forEach((style) => {
        const [styleName, styleValue] = style;
        el.style[styleName] = styleValue;
      });
    }

    if (textContent) {
      el.textContent = textContent;
    }
    return {
      ...acc,
      [name]: el,
    };
  }, {});

  return result;
}

function ProductCardMaker({ //eslint-disable-line
  id, imgSrc, type, product, description, numberOfRatings, users,
}) {
  const elements = [
    {
      name: 'card',
      type: 'div',
      classes: ['product-card'],
    },
    {
      name: 'img',
      type: 'div',
      classes: ['img'],
      styles: [['backgroundImage', `url("${imgSrc}")`]],
    },
    {
      name: 'heartDiv',
      type: 'button',
      classes: ['heart'],
    },
    {
      name: 'heart',
      type: 'i',
      classes: ['far', 'fa-heart'],
    },
    {
      name: 'productInfo',
      type: 'div',
      classes: ['product-info'],
    },
    {
      name: 'rating',
      type: 'div',
      classes: ['rating'],
    },
    {
      name: 'ratingNum',
      type: 'span',
      textContent: numberOfRatings,
    },
    {
      name: 'stars',
      type: 'div',
      classes: ['stars'],
    },
    {
      name: 'userNumber',
      type: 'span',
      classes: ['user-num'],
      textContent: users,
    },
  ];

  const {
    card,
    img,
    heartDiv,
    heart,
    productInfo,
    rating,
    ratingNum,
    stars,
    userNumber,
  } = ProductElementMaker(elements);

  [
    { elType: 'h3', text: type },
    { elType: 'h2', text: product },
    { elType: 'p', text: description },
  ].forEach(({ elType, text }) => {
    const { el } = ProductElementMaker([{ name: 'el', type: elType, textContent: text }]);
    productInfo.appendChild(el);
  });

  [...Array(numberOfRatings)].forEach(() => {
    const { star } = ProductElementMaker([
      {
        name: 'star',
        type: 'i',
        classes: ['material-icons'],
        textContent: 'star',
      },
    ]);
    stars.appendChild(star);
  });

  heartDiv.appendChild(heart);
  img.appendChild(heartDiv);

  rating.appendChild(ratingNum);
  rating.appendChild(stars);
  rating.appendChild(userNumber);

  productInfo.appendChild(rating);

  card.appendChild(img);
  card.appendChild(productInfo);

  card.addEventListener('click', () => {
    const itemAdded = document.querySelector('#itemAdded');
    const thing = document.querySelector('.item-added');
    heartDiv.classList.toggle('liked');
    itemAdded.classList.toggle('item-added-open');
    const imgDiv = document.createElement('div');
    imgDiv.style.backgroundImage = `url(${imgSrc})`;
    imgDiv.classList.add('item-img');
    thing.appendChild(imgDiv);
  });

  return card;
}
