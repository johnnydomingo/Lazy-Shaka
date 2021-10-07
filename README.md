## Lazy Shaka
https://johnnydomingo.github.io/Lazy-Shaka/

## Project Description
This website is catered towards anyone interested in the current beach and surf conditions around the Hawaiian Islands. The user will make a selection from the listed options and upon selecting be matched with the current conditions for the day. 

## API and Data Sample
https://hawaiibeachsafety.com/rest/conditions.json

```
{
beach: "Aliʻi Beach Park",
beach_id: "1",
island: "Oahu",
shore: "Oahu North Shore",
lat: "21.593973120400",
lon: "-158.108337702600",
nearshore: "high",
offshore: "high",
updated: "2021-10-07T05:04:47-1000",
temp: "77",
weather: "Partly Cloudy",
icon: "nsct.png",
wind: "Northeast at 9.2 MPH (8 KT)",
recorded: "2021-10-07T04:53:00-1000",
surf: "3-5 feet",
forecast: "2021-10-07T03:42:00-1000",
link: "https://hawaiibeachsafety.com/oahu/alii-beach-park"
},
```
## Wireframes
'Link to WireFrames'

### MVP/PostMVP

### MVP
-Find and incorporate a marine forecast API
-Use fetch to access data from API and display desired information on page
-Build layout using HTML and Javascript
-Style the page with Flexbox and CSS
-Incorporate a mediaquery to implement resposive design for a desktop/mobile device

### PostMVP
-Add a slideshow of images to display the land and people of Hawai'i
-Incorpate visual animations to the slideshow

## Timeframes
| Component | Priority |  Estimated Time | Actual Time |
| --- | :---: | :---: | :---: | :---: |
| Finding working API | H | 2 hrs | 3 hrs | 
| Pseudocode/Pre-planning | H | 2 hrs | 2 hrs | 
| HTML and Javascript Structure | H | 3 hrs | 4 hrs |
| Displaying Data from API fetch | H | 3 hrs | 10 hrs | 
| Style page with Flexbox | H | 3 hr | 1 hr | 
| Stlye page with CSS | H | 4 hrs | 10 hrs | 
| Applying Media Query | H | 2 hrs | 1 hrs | 
| Applying and styling slideshow | H | 3 hrs | 6 hrs | 
| Total | H | 22hrs | 37 hrs |

## Code Snippet 

This is a portion of my code where I was able to loop through an array of images that I created. The objective was simple: I wanted to introduce multiple pictures without having to extend to another webpage or increase the size of the current one. Although this code is part of my PostMVP, I am most proud of it because this allowed me to have a bigger visual impact on my page. 

```
let i = 0;
const slideShow = () => {
  const image = document.getElementById('slide');

  image.src = imageArr[i];
  i++;
  if (i === imageArr.length) {
    i = 0;
  }
}
```
## Change Log

I changed my API over the weekend because I felt it was too difficult to pinpoint the data I needed. The current API is perfect because it caters specifically to the area I wanted to focus on.