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

class PopUpMaker {
  constructor({
    id, heart, imgSrc, type, product, description, rating,
  }) {
    const itemAdded = document.querySelector('#itemAdded');

    const currentItem = document.querySelector(`.item-${id}`);

    if (currentItem) {
      heart.classList.remove('fas', 'liked');
      heart.classList.add('far');
      currentItem.outerHTML = '';
      return null;
    }

    heart.classList.remove('far');
    heart.classList.add('fas', 'liked');
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

    this.popUpCard = popUpCard;
  }

  render() {
    return this.popUpCard;
  }
}

class ProductCardMaker { //eslint-disable-line
  constructor(obj) {
    // data for creating elements
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
        styles: [['backgroundImage', `url("${obj.imgSrc}")`]],
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
        textContent: obj.numberOfRatings,
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
        textContent: `${obj.users} ratings`,
      },
    ];

    // elements created from data
    this.data = { ...obj };
    this.elements = ProductElementMaker(elements);

    this.img = this.createImageComponent();
    this.productInfo = this.createProductInfoSectionComponent();

    const { card } = this.elements;
    card.addEventListener('click', () => this.clickHandler());
  }

  createImageComponent() {
    const {
      img,
      heartDiv,
      heart,
    } = this.elements;

    heartDiv.appendChild(heart);
    img.appendChild(heartDiv);
    this.heart = heart;
    return img;
  }

  createProductInfoSectionComponent() {
    const {
      productInfo,
    } = this.elements;

    const rating = this.createRatingComponent();

    [
      { elType: 'h3', text: this.data.type },
      { elType: 'h2', text: this.data.product },
      { elType: 'p', text: this.data.description },
    ].forEach(({ elType, text }) => {
      const { el } = ProductElementMaker([{ name: 'el', type: elType, textContent: text }]);
      productInfo.appendChild(el);
    });


    productInfo.appendChild(rating);
    return productInfo;
  }

  createRatingComponent() {
    const {
      rating, stars, ratingNum,
      userNumber,
    } = this.elements;

    [...Array(this.data.numberOfRatings)].forEach(() => {
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

    rating.appendChild(ratingNum);
    rating.appendChild(stars);
    rating.appendChild(userNumber);

    return rating;
  }

  clickHandler() {
    const popUp = document.querySelector('#pop-up-panel');
    const popUpCard = new PopUpMaker({
      ...this.data,
      ...this.elements,
      heart: this.heart,
    }).render();

    if (popUpCard) {
      popUp.appendChild(popUpCard);
    }
  }

  render() {
    const { card } = this.elements;
    card.appendChild(this.img);
    card.appendChild(this.productInfo);
    return card;
  }
}
