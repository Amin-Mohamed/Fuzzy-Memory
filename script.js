
'use strict';

// shuffle images when replay button clicked
let replay = document.querySelector('.button');
  replay.addEventListener('click', function(e){
    cards.forEach(card => {
      let RandomImg = Math.floor(Math.random() * 16);
      card.style.order = RandomImg;
    })
  });


//flip the cards
let cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', function(e){
  this.classList.toggle('flip');
}));



// const clicks = document.querySelectorAll('.back-img');
// // click.forEach(click =>click.addEventListener('click', function(e){
// //
// // }));
//
// function shwoImg(){
//   click.style.visibility='visible';
// }
//
// clicks.forEach(click =>click.addEventListener('click', shwoImg));
