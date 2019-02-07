const closeItem = document.querySelector('#closeItem');

closeItem.addEventListener('click', () => {
  const itemAdded = document.querySelector('#itemAdded');
  itemAdded.classList.toggle('item-added-open');
});


class PopUpElementMaker { //eslint-disable-line
  constructor(obj) {
    this.ProductElementMaker = ProductElementMakerFunc; //eslint-disable-line

    this.data = { ...obj };

    const itemAdded = document.querySelector('#itemAdded');
    const currentItem = document.querySelector(`.item-${this.data.id}`);

    if (currentItem) {
      this.data.heart.classList.remove('fas', 'liked');
      this.data.heart.classList.add('far');
      currentItem.outerHTML = '';
      return null;
    }

    this.data.heart.classList.remove('far');
    this.data.heart.classList.add('fas', 'liked');
    itemAdded.classList.toggle('item-added-open');

    const popUpElements = [
      {
        name: 'popUpCard',
        type: 'div',
        classes: [`item-${this.data.id}`, 'pop-up-card'],
      },
      {
        name: 'popUpImage',
        type: 'div',
        classes: ['pop-up-img'],
        styles: [['backgroundImage', `url("${this.data.imgSrc}")`]],
      },
      {
        name: 'popUpProductSection',
        type: 'div',
        classes: ['pop-up-product-section'],
      },
      {
        name: 'closeButton',
        type: 'i',
        classes: ['close-button', 'material-icons'],
        textContent: 'close',
      },
    ];

    this.elements = this.ProductElementMaker(popUpElements);

    const { popUpCard, popUpImage, closeButton } = this.elements;
    this.popUpCard = popUpCard;
    this.popUpImage = popUpImage;
    this.closeButton = closeButton;

    this.popUpProductSection = this.createPopUpProductSection();

    closeButton.addEventListener('click', () => {
      this.data.heart.classList.remove('fas', 'liked');
      this.data.heart.classList.add('far');
      this.popUpCard.outerHTML = '';
    });
  }

  createPopUpProductSection() {
    const { popUpProductSection } = this.elements;
    [
      { elType: 'h3', text: this.data.type },
      { elType: 'h2', text: this.data.product },
      { elType: 'p', text: `£${this.data.description} per day` },
    ].forEach(({ elType, text }) => {
      const { el } = this.ProductElementMaker([{ name: 'el', type: elType, textContent: text }]);
      popUpProductSection.appendChild(el);
    });
    return popUpProductSection;
  }

  render() {
    this.popUpProductSection.appendChild(this.data.rating);
    this.popUpProductSection.appendChild(this.closeButton);
    this.popUpCard.appendChild(this.popUpImage);
    this.popUpCard.appendChild(this.popUpProductSection);

    return this.popUpCard;
  }
}
