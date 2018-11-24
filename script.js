
'use strict';

// const randomDiv = document.querySelector('.button');
//
// link.addEventListener('click', function(event) {
//   Math.random()
// });


// flip the cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => card.addEventListener('click', function(e){
  this.classList.toggle('flip');
}));

// shuffle images when replay clicked
const replay = document.querySelector('.button');
  replay.addEventListener('click', function(e){
    cards.forEach(card => {
      let RandomImg = Math.floor(Math.random() * 16);
      card.style.order = RandomImg;
    })
  });


const images = document.querySelectorAll('.back-img');
images.forEach(image => image.addEventListener('click', function(e){

    i.style.visibility='visible';
}));

function showImage() {
  const imgs = document.getElementsByClassName('.back-img');
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.visibility='visible';

  }
}









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
