import renderScores from './renderScores.js';

const getScores = async (ID) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`;
  const resp = await fetch(url);
  const jsn = await resp.json();
  const arr = jsn.result;
  renderScores(arr, document.querySelector('.scores-list'));
};

export default getScores;