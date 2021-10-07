console.log('testing');

let beachList
const BASE_URL = `https://hawaiibeachsafety.com/rest/conditions.json/no-cors`;

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

    const nameElem = document.createElement('p');
    nameElem.innerText = choice.beach;
    beachInfo.append(nameElem);
  
    const islandElem = document.createElement('p');
    islandElem.innerText = choice.island;
    beachInfo.append(islandElem);
  
    const shoreElem = document.createElement('p');
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

const imageArr = ["https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2020/12/Diamonhead-Pano_2.jpg", "https://www.hawaiimagazine.com/content/uploads/2021/01/GRAND-PRIZE-Shane-Mayers.jpg", "https://www.hawaiimagazine.com/content/uploads/2021/01/OCEAN-2-Neal-Miyake.jpg", "https://www.hawaiimagazine.com/content/uploads/2021/01/SUNSET-1-Leighton-Lum.jpg", "https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2020/12/Grand-Prize-Winner-1.jpg", "https://www.hawaiimagazine.com/content/uploads/2021/01/Screen-Shot-2021-01-13-at-11.52.51-AM.png", "https://www.hawaiimagazine.com/content/uploads/2020/12/People-Second-Place.jpg"];


let i = 0;
const slideShow = () => {
  const image = document.getElementById('slide');

  image.src = imageArr[i];
  i++;
  if (i === imageArr.length) {
    i = 0;
  }
}
  // setInterval(slideShow, 4500);
