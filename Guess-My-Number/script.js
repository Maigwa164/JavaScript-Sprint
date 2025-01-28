'use strict';
/*
console.log(document.querySelector('.message').textContent);

console.log(
  (document.querySelector('.message').textContent = '🥳Correct Number')
);
// console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 16;
console.log(document.querySelector('.guess').value);
*/
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   document.querySelector('.message').textContent = '🎉correct guess';
  //   console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Number is empty🥲';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number🎊';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    score -= 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too high 📈';
    if (score <= 0) {
      document.querySelector('.message').textContent = 'Game Over😔';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < secretNumber) {
    score -= 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too low 📉';
    if (score <= 0) {
      document.querySelector('.message').textContent = 'Game Over😔';
      document.querySelector('.score').textContent = '0';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start Guessing🤸🏾';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const printMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'Invalid input🚫';
    printMessage('Invalid input🚫');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent =
    //   'Congratulations you won!🥳';
    printMessage('Congratulations you won!🥳');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    // document.querySelector('.message').textContent =
    printMessage(guess > secretNumber ? 'Too high📈' : 'Too low📉');
    score--;
    document.querySelector('.score').textContent = score;

    if (score < 1) {
      // document.querySelector('.message').textContent = 'You lost😢';
      printMessage('You lost😢');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }

  // if (guess > secretNumber) {
  //   document.querySelector('.message').textContent = 'Too high📈';
  //   score--;
  //   document.querySelector('.score').textContent = score;

  //   if (score < 1) {
  //     document.querySelector('.message').textContent = 'You lost😢';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
  // if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = 'Too low📉';
  //   score--;
  //   document.querySelector('.score').textContent = score;

  //   if (score < 1) {
  //     document.querySelector('.message').textContent = 'You lost😢';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
});

/*Coding Challenge #1 
Implement a game rest functionality, so that the player can make a new guess! 
Your tasks: 
1. Select the element with the 'again' class and attach a click event handler 
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables 
3. Restore the initial conditions of the message, number, score and guess input 
fields 
4. Also restore the original background color (#222) and number width (15rem)*/

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.number').textContent = secretNumber;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
