import './style.css';
import setScores from './modules/setScores.js';
import getScores from './modules/getScores.js';

const gameId = localStorage.getItem('id');

document.querySelector('.btn2').addEventListener('click', (ev) => {
  ev.preventDefault();

  const nameValue = document.getElementById('name').value;
  const scoreValue = document.getElementById('score').value;
  const form = document.querySelector('.new-score');

  if (nameValue !== '' && scoreValue !== '') {
    setScores(gameId, nameValue, scoreValue);
    form.reset();
  } else {
    form.classList.add('border');
  }
});

const show = () => {
  document.querySelector('.btn').addEventListener('click', () => {
    getScores(gameId);
  });
};

show();