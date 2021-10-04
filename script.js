console.log('testing');

const BASE_URL = `https://hawaiibeachsafety.com/rest/conditions.json/allow-cors`;

fetch(BASE_URL)
  .then((res) => {
    return res.json()
  })
  .then((resJSON) => {
    console.log(resJSON)
  });

  /*
  Data to extract

  */
const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  console.log('button is working');
});