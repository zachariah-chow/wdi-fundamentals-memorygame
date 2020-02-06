let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

let cardsInPlay = [];

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

let winStatus = false;

function checkForMatch() {
    if (winStatus === true) {
        return;
    } else if (
        cardsInPlay[0].rank === cardsInPlay[1].rank || 
        cardsInPlay[0].rank === cardsInPlay[2].rank ||
        cardsInPlay[1].rank === cardsInPlay[2].rank
        ) {
    alert("You found a match!");
    winStatus = true;
    } else {
    alert("Sorry, try again.");
    }
}

function flipCard() {
    cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    console.log(`User flipped ${cards[cardId].rank}!`);
    this.removeEventListener('click', flipCard);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length >= 2) {
        try {
            checkForMatch();
        }
        catch (err) {
            return;
        }
    } else {
        alert ("Please flip another card.");
    }
}

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
       let cardElement = document.createElement('img');
       cardElement.setAttribute('src', 'images/back.png');
       cardElement.setAttribute('data-id', i);
       cardElement.addEventListener('click', flipCard);
       document.getElementById('game-board').appendChild(cardElement);
    }
};

createBoard();

function resetButtonHandler() {
    cardsInPlay = [];
    const cardElements = [...document.getElementsByTagName('img')];
    cardElements.forEach(cardElement => {
    cardElement.setAttribute ('src', 'images/back.png');
    });
    cardElements.forEach(cardElement => {
        cardElement.addEventListener('click', flipCard);
    });
    winStatus = false;
}

let resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetButtonHandler);