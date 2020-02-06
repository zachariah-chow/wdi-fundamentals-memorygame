let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

let winStatus = false;

function checkForMatch() {
    if (cardsInPlay.length >= 2) {
        if (cardsInPlay[0] === cardsInPlay[1] || cardsInPlay [2]) {
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
    if (winStatus === true) {
        return;
    } else {
        console.log(`User flipped ${cards[cardId]}!`);
        cardsInPlay.push(cards[cardId]);
        cards.splice(cardId, 1);
        checkForMatch();
        flipCard(getRandomIntInclusive(0,cards.length - 1));
    }
}

flipCard(0);