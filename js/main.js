// let cards = ["queen", "queen", "king", "king"];

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
    if (cardsInPlay.length >= 2) {
        if (cardsInPlay[0].rank === cardsInPlay[1].rank || cardsInPlay[0].rank === cardsInPlay[cards.length - 1].rank) {
        alert("You found a match!");
        winStatus = true;
        } else {
        alert("Sorry, try again.");
        }
    } else {
        alert("Please flip another card.");
    }
}

function flipCard(cardId) {
    if (winStatus === true || cards.length === 0) {
        return;
    } else {
        console.log(`User flipped ${cards[cardId].rank}!`);
        console.log(`${cards[cardId].cardImage}`);
        cardsInPlay.push(cards[cardId]);
        cards.splice(cardId, 1);
        checkForMatch();
    }
}

flipCard(0);
flipCard(2);
flipCard(1);