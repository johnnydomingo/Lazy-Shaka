console.log('testing');

const BASE_URL = `https://hawaiibeachsafety.com/rest/conditions.json/allow-cors`;

  /*
What do we want to do?
  - we need the value of each dropbox item to be connected to
    its corresponding data
  - we need the button to react to the desired data and display it
  - we want the button to link the data and open to a new page
Data to extract
  .surf
  .temp
  .weather
  .wind
  */
const populateDropdownData = (beachData) => {
  const dropdownElem = document.querySelector('#drop-down');
  const beach = document.querySelector('#drop-down').value;
  for (beach in beachData) {
    if (beachData[beach].length >= 0) {
      const beachOptions = beachData[beach].map((beach) => {
        const beachOption = document.createElement('option');
        beachOption.innerText = `${beach}`;
        beachOption.value = `${beach}`;

        return beachOption;
      });

      dropdownElem.append(...beachOptions);
    } else {
      const beachOption = document.createElement('option');
      beachOption.innerText = beach;

      dropdownElem.append(beachOption);
    }
  }
}




const chooseBeach = (beachList) => {
  const choice = beachList.find(beach => beach.beach == dropDown.value);
  console.log(choice);
  
  const beachInfo = document.createElement('div');
  beachInfo.className = 'beachInfo';

  const nameElem = document.createElement('p');
  nameElem.innerText = [beach].beach;
  beachInfo.append(nameElem);

  const surfElem = document.createElement('p');
  surfElem.innerText = beach.surf;
  beachInfo.append(surfElem);

  const weatherElem = document.createElement('p');
  weatherElem.innerText = beach.weather;
  beachInfo.append(weatherElem);

  const windElem = document.createElement('p');
  windElem.innerText = beach.wind;
  beachInfo.append(windElem);

  const shoreElem = document.createElement('p');
  shoreElem.innerText = beach.shore;
  beachShore.append(shoreElem);

  // document.querySelector(beachList).append(beachInfo);
}
const dropDown = document.getElementById('drop-down');
// for (let i = 0; i < data.length; i++) {
//   const div = document.createElement('div');
//   div.innerHTML = data[i].surf + data[i].temp + data[i].weather + data[i].wind;
// //   mainContainer.appendChild(div);
// }

// }
const searchButton = document.querySelector('form');
searchButton.addEventListener('click', (ev) => {
  ev.preventDefault();

  // const beach = document.querySelector('#drop-down').value;

  fetch(BASE_URL)
  .then((res) => {
    return res.json()
  })
  .then((resJSON) => {
    chooseBeach(resJSON)
    populatedDropdownData(resJSON);
  })
  .catch((err) => {
    console.error(`ERROR: ${err}`)
  });
  // console.log(dropDown.value);
  // console.log('button is working');
});