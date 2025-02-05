'use strict';
//Practice
/*
const scoreDisplay = document.querySelectorAll('.score');
const dice = document.querySelector('.dice');

let score = 0;

for (let i = 0; i < scoreDisplay.length; i++) {
  scoreDisplay[i].textContent = score;
}

dice.style.display = 'none';*/
/*
//start
//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//initial condition
score0El.textContent = 0;
score1El.textContent = 0;

const score = [0, 0];
let activePlayer = 0;
let currentScore = 0;

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  //Generating random number
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  // display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //Check for 1

  if (dice !== 1) {
    currentScore += dice;
    // current0El.textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
*/

//************Revision*********** */

//Selecting the elements
const cumulativeScore0El = document.getElementById('score--0');
const cumulativeScore1El = document.getElementById('score--1');
const diceImg = document.querySelector('.dice');

//Default setting
cumulativeScore0El.textContent = 0;
cumulativeScore1El.textContent = 0;
diceImg.classList.add('hidden');
