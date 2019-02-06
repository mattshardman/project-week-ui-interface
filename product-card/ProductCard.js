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
      textContent: `${users} ratings`,
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

  // event listener for opening popup

  card.addEventListener('click', () => {
    const itemAdded = document.querySelector('#itemAdded');
    const popUp = document.querySelector('#pop-up-panel');
    const currentItem = document.querySelector(`.item-${id}`);
    heartDiv.classList.toggle('liked');

    if (currentItem) {
      return currentItem.outerHTML = '';
    }

    itemAdded.classList.toggle('item-added-open');

    const popUpElements = [
      {
        name: 'popUpCard',
        type: 'div',
        classes: [`item-${id}`, 'pop-up-card'],
      },
      {
        name: 'popUpImage',
        type: 'div',
        classes: ['pop-up-img'],
        styles: [['backgroundImage', `url("${imgSrc}")`]],
      },
      {
        name: 'popUpProductSection',
        type: 'div',
        classes: ['pop-up-product-section'],
      },
    ];

    const { popUpCard, popUpImage, popUpProductSection } = ProductElementMaker(popUpElements);

    [
      { elType: 'h3', text: type },
      { elType: 'h2', text: product },
      { elType: 'p', text: description },
    ].forEach(({ elType, text }) => {
      const { el } = ProductElementMaker([{ name: 'el', type: elType, textContent: text }]);
      popUpProductSection.appendChild(el);
    });

    popUpProductSection.appendChild(rating);
    popUpCard.appendChild(popUpImage);
    popUpCard.appendChild(popUpProductSection);
    popUp.appendChild(popUpCard);
  });

  return card;
}
