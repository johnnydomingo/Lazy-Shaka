console.log('testing');

let beachList
const BASE_URL = `https://hawaiibeachsafety.com/rest/conditions.json/allow-cors`;

fetch(BASE_URL)
.then((res) => {
  return res.json()
})
  .then((resJSON) => {
    populateDropdownData(resJSON);
    beachList = resJSON;
    return beachList;
})
// .catch((err) => {
//   // console.error(`ERROR: ${err}`)
// });
const dropdownElem = document.querySelector('#drop-down');
const populateDropdownData = (beachData) => { 
    if (beachData.length > 0) {
      
      const beachOptions = beachData.map((beach) => {
        const beachOption = document.createElement('option');
        beachOption.innerText = beach.beach;
        beachOption.value = beach.beach_id;

        return beachOption;
      });
      dropdownElem.append(...beachOptions);
    }
  }

const chooseBeach = () => {
  document.querySelector('.beach-list').innerHTML = '';
  const choice = beachList.find(beach => beach.beach_id === dropdownElem.value)
  console.log(choice);
  
    const beachInfo = document.createElement('div');
    beachInfo.className = 'beachInfo';

    const nameElem = document.createElement('h2');
    nameElem.innerText = choice.beach;
    beachInfo.append(nameElem);
  
    const islandElem = document.createElement('h3');
    islandElem.innerText = choice.island;
    beachInfo.append(islandElem);
  
    const shoreElem = document.createElement('h4');
    shoreElem.innerText = choice.shore;
    beachInfo.append(shoreElem);

    const surfElem = document.createElement('p');
    surfElem.innerText = choice.surf;
    beachInfo.append(surfElem);

    const weatherElem = document.createElement('p');
    weatherElem.innerText = choice.weather;
    beachInfo.append(weatherElem);

    const windElem = document.createElement('p');
    windElem.innerText = choice.wind;
    beachInfo.append(windElem);

    
  
    document.querySelector('.beach-list').append(beachInfo);
  
};
