const renderScores = (array, container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  array.forEach((elem) => {
    const scoreItem = document.createElement('li');
    scoreItem.innerHTML = `
        <span class="userName">${elem.user} <span class="two">:</span></span><span class="score-showed">${elem.score}</span>
      `;
    scoreItem.classList.add('score-item');
    container.appendChild(scoreItem);
  });
};

export default renderScores;