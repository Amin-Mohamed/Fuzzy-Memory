
'use strict';

// shuffle images and show the game when replay button is clicked
const startButton = document.getElementById('start-button')
const game = document.getElementById('game')

startButton.addEventListener('click', function (e) {
  cards.forEach(card => {
    let RandomImg = Math.floor(Math.random() * 16)
    card.style.order = RandomImg;
  })
  startButton.style.visibility='hidden'
  game.style.visibility='visible'
})

// shuffle images when replay button clicked
let replay = document.querySelector('.button')
  replay.addEventListener('click', function(e){
    cards.forEach(card => {
      let RandomImg = Math.floor(Math.random() * 16)
      card.style.order = RandomImg;
    })
  });

//flip the cards
let hasFlipped = false;
let firstCard, secondCard;

let cards = document.querySelectorAll('.card')
cards.forEach(card => card.addEventListener('click', function(e){
  this.classList.toggle('flip')

  if (!hasFlipped) {
    hasFlipped = true
    firstCard = this
    // console.log(hasFlipped, firstCard);
  }
    else {
      hasFlipped = true
      secondCard = this
    }
    // console.log(firstCard, secondCard);
    if (secondCard) {

      if (firstCard.dataset.img === secondCard.dataset.img){
        console.log('works')
      }
    }

  }));

  // function flipCard() {
  //   this.classList.toggle('flip');
  //
  //   if (!hasFlipped) {
  //     hasFlipped = true;
  //     firstCard = this;
  //     // console.log(hasFlipped, firstCard);
  //   }
  //     else {
  //       hasFlipped = true;
  //       secondCard = this;
  //     }
  //     // console.log(firstCard, secondCard);
  //     if (secondCard) {
  //
  //       if (firstCard.dataset.img === secondCard.dataset.img){
  //         console.log('works');
  //         firstCard.removeEventListener('click', flipCard());
  //         secondCard.removeEventListener('click', flipCard());
  //       }
  //     }
  // }
  //
  // cards.forEach(card => card.addEventListener('click', flipCard));
