const renderScores = (arr, container) => {  
    arr.forEach(elem => {
      const scoreItem = document.createElement('li');
      scoreItem.innerHTML = `
        <span>${elem.name} :</span><span class="score-showed">${elem.score}</span>
      `;
      scoreItem.classList.add('score-item');
      container.appendChild(scoreItem);
    })
  }

export default renderScores;