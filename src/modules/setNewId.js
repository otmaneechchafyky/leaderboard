const setId = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const obj = {
    name: 'My cool new game',
  };
  const resp = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const jsn = await resp.json();
  const id = await jsn.result.slice(14, 34);
  localStorage.setItem('id', id);
  return id;
};

export default setId;