'use strict';

const submit = document.querySelector('.btn');
const stateRating = document.querySelector('.state-rating');
const rateArray = document.querySelectorAll('.rate');
const stateThankyou = document.querySelector('.state-thankyou');
const result = document.querySelector('.result span');

submit.addEventListener('mouseup', submitRating);

for (let i = 0; i < rateArray.length; i++) {
  addEventListener('click', clicked);
}

function clearRating() {
  for (let i = 0; i < rateArray.length; i++) {
    rateArray[i].classList.remove('rate-selected');
  }
}

let userRating;

function clicked(e) {
  clearRating();
  if (e.target.parentElement.classList.value == 'rating') {
    userRating = `You selected ${e.target.textContent} out of 5`;
    e.target.classList.add('rate-selected');
    submit.classList.remove('btn-inactive');
  }
}

function submitRating() {
  if(!submit.classList.contains('btn-inactive')) {
    stateRating.classList.add('hidden');
    stateThankyou.classList.remove('hidden');
    result.textContent = userRating;
  }
}
