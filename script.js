console.log('testing');

const BASE_URL = `https://hawaiibeachsafety.com/rest/conditions.json/allow-cors`;

fetch(BASE_URL)
  .then((res) => {
    return res.json()
  })
  .then((resJSON) => {
    console.log(resJSON)
  })
  .catch((err) => {
    console.error(`ERROR: ${err}`)
  });

  /*
  Data to extract
  .surf
  .temp
  .weather
  .wind
  */

const showBeachData = (beachData) => {
  console.log(beachData);

  const beachDataDiv = document.querySelector('#beach-data');
  beachDataDiv.innerHTML = '';

  const surfTag = document.createElement('p');
  const tempTag = document.createElement('p');
  const weatherTag = document.createElement('p');
  const windTag = document.createElement('p');

  surfTag.innerText = beachData[0].surf;
}
const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  console.log('button is working');
});