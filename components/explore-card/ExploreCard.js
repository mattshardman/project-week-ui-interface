const makeElements = ProductElementMakerFunc; //eslint-disable-line

function ExploreCardMaker({ title, photo, href }) { //eslint-disable-line
  const elements = [
    {
      name: 'a',
      type: 'a',
      classes: ['explore-tile-a'],
    },
    {
      name: 'exploreTile',
      type: 'div',
      classes: ['tile'],
    },
    {
      name: 'imgSection',
      type: 'div',
      classes: ['img'],
      styles: [['backgroundImage', `url("${photo}")`]],
    },
    {
      name: 'textSection',
      type: 'div',
      classes: ['title'],
      textContent: title,
    },

  ];

  const {
    a, exploreTile, imgSection, textSection,
  } = makeElements(elements);

  a.setAttribute('href', href);
  exploreTile.appendChild(imgSection);
  exploreTile.appendChild(textSection);

  a.appendChild(exploreTile);

  return a;
}
