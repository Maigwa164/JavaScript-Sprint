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
const player0El = document.querySelector('.player--0'); //Selecting player 1
const player1El = document.querySelector('.player--1'); //Selecting player 2
const cumulativeScore0El = document.getElementById('score--0'); //cumulative score element player 1
const cumulativeScore1El = document.getElementById('score--1'); //cumulative score element player 2
const currentScore0El = document.getElementById('current--0'); //The current score everytime dice is rolled/during active player
const currentScore1El = document.getElementById('current--1'); //The current score everytime dice is rolled/during active player
const diceImg = document.querySelector('.dice'); //Dice image element
const btnRoll = document.querySelector('.btn--roll'); // Selecting the dice roll btn
const btnHold = document.querySelector('.btn--hold'); //Selecting the hold btn
const btnReset = document.querySelector('.btn--new'); //selecting reset button

//Default setting
cumulativeScore0El.textContent = 0; //setting initial condition for cumulative score player 1
cumulativeScore1El.textContent = 0; // setting initial condition for cumulative score player 2
diceImg.classList.add('hidden'); // setting the dice image to hidden (only appears when dice is rolled)

//Declaring variable due to scoping
let currentScore, scoreCumulative, activePlayer, playing;

const init = function () {
  // variable initialization
  currentScore = 0;
  scoreCumulative = [0, 0];
  activePlayer = 0;
  playing = true;

  //Default setting
  currentScore0El.textContent = 0; //current score to 0 for player 1
  currentScore1El.textContent = 0; //current score to 0 for player 2
  cumulativeScore0El.textContent = 0; //setting initial condition for cumulative score player 1
  cumulativeScore1El.textContent = 0; // setting initial condition for cumulative score player 2

  diceImg.classList.add('hidden'); // setting the dice image to hidden (only appears when dice is rolled)
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

//function to switch player(when one is rolled and when player hold the current score)
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //reset the current score content before switching the player
  activePlayer = activePlayer === 0 ? 1 : 0; //checks the current player before switching
  currentScore = 0; //resent the current score to 0
  player0El.classList.toggle('player--active'); //toggle the class between player 1 and 2 (The class only exist on player one and is toggled )
  player1El.classList.toggle('player--active'); //toggle the class back to 1
};

//Rolling a Dice on click handler
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1); //Random number generator btwn 1-6
    // console.log(dice);//confirm if random number is generated
    diceImg.classList.remove('hidden'); //Removing the hidden class to display the dice now on roll
    diceImg.src = `dice-${dice}.png`; //dice is dynamically displayed according to the dice number

    //Cheking if dice ===1 to switch player
    if (dice !== 1) {
      //Adding the current score to the existing score everytime a dice is rolled
      currentScore += dice;
      // console.log(currentScore);//checking if current score is adding up to the current score
      // currentScore0El.textContent = currentScore;// setting the content of current cumulative score to player on to check if it is working
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; //Display the current score dinamically depending on the active player
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scoreCumulative[activePlayer] += currentScore; //takes the current score and adds it to the score on the array
    document.getElementById(`score--${activePlayer}`).textContent =
      scoreCumulative[activePlayer];
    //check if active player score is <=100
    if (scoreCumulative[activePlayer] >= 100) {
      playing = false;
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player-active');
    }
    //switch to next player on hold
    else {
      switchPlayer();
    }
  }
});

btnReset.addEventListener('click', init);
