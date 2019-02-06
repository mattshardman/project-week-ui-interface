const closeItem = document.querySelector('#closeItem');

closeItem.addEventListener('click', () => {
  const itemAdded = document.querySelector('#itemAdded');
  itemAdded.classList.toggle('item-added-open');
});
