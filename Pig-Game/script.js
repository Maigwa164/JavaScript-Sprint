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
const cumulativeScore0El = document.getElementById('score--0'); //cumulative score element player 1
const cumulativeScore1El = document.getElementById('score--1'); //cumulative score element player 2
const currentScore0El = document.getElementById('current--0'); //The current score everytime dice is rolled/during active player
const currentScore1El = document.getElementById('current--1'); //The current score everytime dice is rolled/during active player
const diceImg = document.querySelector('.dice'); //Dice image element
const btnRoll = document.querySelector('.btn--roll'); // Selecting the dice roll btn

//Default setting
cumulativeScore0El.textContent = 0; //setting initial condition for cumulative score player 1
cumulativeScore1El.textContent = 0; // setting initial condition for cumulative score player 2
diceImg.classList.add('hidden'); // setting the dice image to hidden (only appears when dice is rolled)

//Declaring variable
let currentScore = 0;

//Rolling a Dice on click handler
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6 + 1); //Random number generator btwn 1-6
  // console.log(dice);//confirm if random number is generated
  diceImg.classList.remove('hidden'); //Removing the hidden class to display the dice now on roll
  diceImg.src = `dice-${dice}.png`; //dice is dynamically displayed according to the dice number

  //Adding the current score to the existing score everytime a dice is rolled
  currentScore += dice;
  // console.log(currentScore);//checking if current score is adding up to the current score
  // currentScore0El.textContent = currentScore;// setting the content of current cumulative score to player on to check if it is working

  //Cheking if dice ===1 to switch player
});
