const setScores = async (ID, userName, yourScore) => {
  const obj = {
    user: userName,
    score: yourScore,
  };
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`;
  const resp = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const jsn = await resp.json();
  return jsn;
};

export default setScores;