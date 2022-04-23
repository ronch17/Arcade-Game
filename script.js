'use strict';

console.log('Welcome to my first, cool arcade game. Enjoy 👻');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  const theMessage = (document.querySelector('.message').textContent = message);
  return theMessage;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number 🙈');
    document.querySelector('body').style.backgroundColor = '#E0323D';
  } else if (guess === secretNumber) {
    displayMessage('You win 😍');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.fontSize = '10rem';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.number').style.transition = '1s ease';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else if (score < highscore) {
      highscore += score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high 😉' : 'Too low 😏');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game over 💀☠');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#1824EB';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.transition = '1s ease';
});
