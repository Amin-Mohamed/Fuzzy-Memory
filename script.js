
'use strict';

const startButton = document.getElementById('start-button')
const game = document.getElementById('game')
const title = document.getElementById('splash-screen')
const replayButton = document.getElementById('button-div')

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

// call the function when the button is clicked
startButton.addEventListener('click', startGame);


let hasFlipped = false
let firstCard, secondCard

//flip the cards function
function flipCard() {
  this.classList.add('flip')
  //firstCard
  if (!hasFlipped) {
    hasFlipped = true;
    firstCard = this;
    return
  }
    //secandCard
    hasFlipped = false;
    secondCard = this;
    matchCheck();
}

// flip the card when its clicked
let cards = document.querySelectorAll('.card')
cards.forEach(card => card.addEventListener('click', flipCard))


let replay = document.querySelector('.replay-button')
function restartGame(){
  // if the cards are flipped
  if (!hasFlipped) {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    startGame()
}
}
replay.addEventListener('click', restartGame)

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
