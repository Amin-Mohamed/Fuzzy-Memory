
'use strict';

const startButton = document.getElementById('start-button')
const game = document.getElementById('game')
const title = document.getElementById('splash-screen')
const replayButton = document.getElementById('button-div')

// shuffle images and show the game when start button is clicked
startButton.addEventListener('click', function (e) {
  cards.forEach(card => {
    let RandomImg = Math.floor(Math.random() * 16)
    card.style.order = RandomImg;
  })
  startButton.style.visibility='hidden'
  game.style.visibility='visible'
  title.style.visibility='hidden'
  replayButton.style.visibility='visible'
})


// shuffle cards when replay button is clicked
let replay = document.querySelector('.button')
  replay.addEventListener('click', function(e){
    cards.forEach(card => {
      let RandomImg = Math.floor(Math.random() * 16)
      card.style.order = RandomImg;
    })
  });

let cards = document.querySelectorAll('.card')
cards.forEach(card => card.addEventListener('click', flipCard))


let hasFlipped = false
let firstCard, secondCard

//flip the cards
function flipCard() {
  this.classList.add('flip')
  //firstCard
  if (!hasFlipped) {
    hasFlipped = true
    firstCard = this
    return
  }
      //secandCard
      hasFlipped = false
      secondCard = this
      matchCheck()
}
// card match check
function matchCheck() {

  if (firstCard.dataset.img === secondCard.dataset.img)
  {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
      console.log('works');
  }
  
  else
  {
  setTimeout(() =>{
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
  }, 1000);
}
}





// cards.forEach(card => card.addEventListener('click', function(e){
//   this.classList.toggle('flip')
//
//   if (!hasFlipped) {
//     hasFlipped = true
//     firstCard = this
//     // console.log(hasFlipped, firstCard);
//   }
//     else {
//       hasFlipped = true
//       secandCard = this
//     }
//     // console.log(firstCard, secondCard);
//     if (secandCard) {
//       if (firstCard.dataset.img === secandCard.dataset.img){
//         console.log('works')
//       }
//     }
//
//   }));


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
