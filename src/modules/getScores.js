import renderScores from './renderScores.js';

const getScores = async (ID) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`;
  const resp = await fetch(url);
  const jsn = await resp.json();
  const Arr = jsn.result;
  renderScores(Arr, document.querySelector('.scores-list'));
};

export default getScores;