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
