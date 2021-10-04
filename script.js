console.log('testing');

const BASE_URL = `https://hawaiibeachsafety.com/rest/conditions.json/allow-cors`;

  /*
What do we want to do?
  - we need the value of each dropbox item to be connected to
    its corresponding data
  - we need the button to react to the desired data and display it
  - we want the button to link the data and open to a new page
  */

// const location = [
//   {
//     id: "1"
//   }
// ]
fetch(BASE_URL)
  .then((res) => {
    return res.json()
  })
  .then((resJSON) => {
    console.log(resJSON)
    // showBeachData(resJSON);
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

const chooseBeach = (beachList) => {
  const choice = beachList.find(beach => beach.beach == dropDown.value);
  console.log(choice);

  const beachInfo = createElement('div');
  beachInfo.className = 'beachInfo';

  const beachName = document.createElement('p');
  beachName.innerText = beach.beach;
  beachInfo.append(beachName);

  const surfReport = document.createElement('p');
  surfReport.innerText = beach.surf;
  beachInfo.append(surfReport);

  const beachWeather = document.createElement('p');
  beachWeather.innerText = beach.weather;
  beachInfo.append(beachWeather);

  const beachWind = document.createElement('p');
  beachWind.innerText = beach.wind;
  beachInfo.append(beachWind);

  document.querySelector(beachList).append(beachInfo);
}
const dropDown = document.getElementById('drop-down');

// console.log(dropDown.value);
// const mainContainer = document.getElementsByClassName('dropDown');
// const data = 'https://hawaiibeachsafety.com/rest/conditions.json/allow-cors';
// for (let i = 0; i < data.length; i++) {
//   const div = document.createElement('div');
//   div.innerHTML = data[i].surf + data[i].temp + data[i].weather + data[i].wind;
// //   mainContainer.appendChild(div);
// }

// }
const searchButton = document.querySelector('form');
searchButton.addEventListener('click', (ev) => {
  ev.preventDefault();

  fetch(BASE_URL)
  .then((res) => {
    return res.json()
  })
  .then((resJSON) => {
    chooseBeach(resJSON)
    // showBeachData(resJSON);
  })
  .catch((err) => {
    console.error(`ERROR: ${err}`)
  });
  // console.log(dropDown.value);
  // console.log('button is working');
});