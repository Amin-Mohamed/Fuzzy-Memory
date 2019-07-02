'use strict';

const startButton = document.getElementById('start-button')
const game = document.getElementById('game')
const title = document.getElementById('splash-screen')
const replayButton = document.getElementById('button-div')
let cards = document.querySelectorAll('.card')
let replay = document.querySelector('.replay-button')
let pairCounter = 0;

// shuffle cards and start the game
function startGame() {
    cards.forEach(card => {
      let RandomImg = Math.floor(Math.random() * 16)
      card.style.order = RandomImg;
    })
    startButton.style.visibility='hidden'
    game.style.visibility='visible'
    title.style.visibility='hidden'
    replayButton.style.visibility='visible'
}

// call the function when the start button is clicked
startButton.addEventListener('click', startGame);

//repaly button --- a new memory board
function resetBoard() {
  pairCounter = 0;
  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
});
  setTimeout(() => {
  startGame();
  }, 500);
}
replay.addEventListener('click', resetBoard)

let hasFlipped = false
let firstCard, secondCard

//flip the cards
function flipCard() {
  this.classList.add('flip')
  //first click
  if (!hasFlipped) {
    hasFlipped = true;
    firstCard = this;
    return
  }
    //secand click
    hasFlipped = false;
    secondCard = this;
    matchCheck();
}

// flip the card
cards.forEach(card => card.addEventListener('click', flipCard))

// card matching check
function matchCheck() {
  // first and secand card are matching?
  if (firstCard.dataset.img === secondCard.dataset.img)
      {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        pairCounter++;
      }
  //not match
  else
  {
  setTimeout(() =>{
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
  }, 800);
}

// all cards are matching?
if (pairCounter === 8)
{
  setTimeout(() => {
    window.alert("Congratulations you won! Press replay to start a new game");
  }, 500)
}
}
