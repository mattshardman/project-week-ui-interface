const closeItem = document.querySelector('#closeItem');

closeItem.addEventListener('click', () => {
  console.log('clicked');
  const itemAdded = document.querySelector('#itemAdded');
  itemAdded.classList.toggle('item-added-open');
});
