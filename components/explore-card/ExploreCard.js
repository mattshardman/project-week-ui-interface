const makeElements = ProductElementMakerFunc; //eslint-disable-line

function ExploreCardMaker({ title, photo }) { //eslint-disable-line
  const elements = [
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

  const { exploreTile, imgSection, textSection } = makeElements(elements);

  exploreTile.appendChild(imgSection);
  exploreTile.appendChild(textSection);

  return exploreTile;
}
