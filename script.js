
'use strict';

const startButton = document.getElementById('start-button')
const game = document.getElementById('game')
const title = document.getElementById('splash-screen')
const replayButton = document.getElementById('button-div')
let cards = document.querySelectorAll('.card')
let replay = document.querySelector('.replay-button')

// shuffle cards and start the game function
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

let hasFlipped = false
let firstCard, secondCard

//flip the cards function
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

// card match check
function matchCheck() {
  // first and secand card matching?
  if (firstCard.dataset.img === secondCard.dataset.img)
  {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }
  //not match
  else
  {
  setTimeout(() =>{
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
  }, 800);
}
}

// flip the card when its clicked
cards.forEach(card => card.addEventListener('click', flipCard))

// function restartGame(){
  // if the cards are flipped
//   if (!hasFlipped) {
//     cards.forEach(function (card) {
//     card.classList.remove('flip')
//   })
// }
//   startGame()
// }

replay.addEventListener('click', () => {
  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);

});
  setTimeout(() => {
    startGame();
  }, 500);
});




//congratulations

let matchedCards = [];
cards.forEach(function (card) {
  if (card.dataset.img === card.dataset.img) {
    matchedCards.push(card);
  }
})
console.log(matchedCards)
