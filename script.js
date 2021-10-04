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


const select = document.getElementById('searchButton');
const value = select.options[select.selectedIndex].value;
console.log(value);
// const mainContainer = document.getElementsByClassName('dropDown');
// const data = 'https://hawaiibeachsafety.com/rest/conditions.json/allow-cors';
// for (let i = 0; i < data.length; i++) {
//   const div = document.createElement('div');
//   div.innerHTML = data[i].surf + data[i].temp + data[i].weather + data[i].wind;
//   mainContainer.appendChild(div);
// }
// const showBeachData = (beachData) => {
//   document.querySelector('#beach-data').innerHTML = '';
//   beachData.forEach((beach) => {
    
//     const beachInfo = document.createElement('div');
//     beachInfo.className = 'beachInfo';

//     const surfElem = document.createElement('h3');
//     surfElem.innerText = [0].surf;
//     beachInfo.append(surfElem);

//     document.querySelector('#beach-data').append(beachInfo);
//   })
//   // console.log(beachData);

//   // const beachDataDiv = document.querySelector('#beach-data');
  

// }
const searchButton = document.querySelector('form');
searchButton.addEventListener('click', (ev) => {
  ev.preventDefault();

  // const beach = document.querySelector('#beach-data').value;

  console.log('button is working');
});