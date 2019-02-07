const ProductElementMaker = ProductElementMakerFunc; //eslint-disable-line

const PopUpMaker = PopUpElementMaker; //eslint-disable-line

class ProductCardMaker { //eslint-disable-line
  constructor(obj, renderHeart, numOfDays) {
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

    this.data = { ...obj };
    // elements created from data
    this.elements = ProductElementMaker(elements);

    this.img = this.createImageComponent(renderHeart);
    this.productInfo = this.createProductInfoSectionComponent(numOfDays);
  }

  createImageComponent(renderHeart) {
    const {
      img,
      heartDiv,
      heart,
    } = this.elements;

    if (renderHeart) {
      heartDiv.appendChild(heart);
      img.appendChild(heartDiv);
    }

    heartDiv.addEventListener('click', () => this.clickHandler(heart));
    return img;
  }

  createProductInfoSectionComponent(numOfDays) {
    const {
      productInfo,
    } = this.elements;

    const rating = this.createRatingComponent();

    [
      { elType: 'h3', text: this.data.type },
      { elType: 'h2', text: this.data.product },
      { elType: 'p', text: `£${this.data.description} per day - £${this.data.description * numOfDays || this.data.description} total` },
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

  clickHandler(heart) {
    const popUp = document.querySelector('#pop-up-panel');
    const popUpCard = new PopUpMaker({
      ...this.data,
      ...this.elements,
      heart,
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
