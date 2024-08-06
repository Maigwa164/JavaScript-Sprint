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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   document.querySelector('.message').textContent = '🎉correct guess';
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Number is empty🥲';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number🎊';
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
