function ExploreCardMaker({ title, photo }) { //eslint-disable-line
  const exploreTile = document.createElement('div');
  exploreTile.classList.add('tile');

  const imgSection = document.createElement('div');
  imgSection.classList.add('img');

  imgSection.style.backgroundImage = `url("${photo}")`;

  const textSection = document.createElement('div');
  textSection.classList.add('title');
  textSection.textContent = title;

  exploreTile.appendChild(imgSection);
  exploreTile.appendChild(textSection);

  return exploreTile;
}
