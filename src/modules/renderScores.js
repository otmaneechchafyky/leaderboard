const renderScores = (array, container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  array.forEach((ele) => {
    const scoreItem = document.createElement('li');
    scoreItem.innerHTML = `
        <span class="userName">${ele.user} <span class="two">:</span></span><span class="score-showed">${ele.score}</span>
      `;
    scoreItem.classList.add('score-item');
    container.appendChild(scoreItem);
  });
};

export default renderScores;