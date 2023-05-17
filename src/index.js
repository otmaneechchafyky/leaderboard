import './style.css';
import renderScores from './modules/renderScores.js';

const scores = [
  {
    id: Date.now(),
    name: 'otmane',
    score: 190,
  },
  {
    id: Date.now(),
    name: 'kaddour',
    score: 170,
  },
  {
    id: Date.now(),
    name: 'jilali',
    score: 100,
  },
  {
    id: Date.now(),
    name: 'hamouda',
    score: 97,
  },
  {
    id: Date.now(),
    name: 'khaoula',
    score: 300,
  },
  {
    id: Date.now(),
    name: 'mohammed',
    score: 999,
  },
];

const scoreContainer = document.querySelector('.scores-list');
renderScores(scores, scoreContainer);