const exploreTileSection = document.querySelector('.tile-wrapper');

const exploreTilesData = [
    { 
        title: 'Phones',
        photo: 'https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    },
    { 
        title: 'Laptops',
        photo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    },
    { 
        title: 'Cameras',
        photo: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
    }
]

function ExploreCardMaker({ title, photo }) {
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

const exploreTiles = exploreTilesData
    .map(data => ExploreCardMaker(data))
    
exploreTiles.forEach(tile => exploreTileSection.appendChild(tile));