const weather = document.querySelector(".js-weather");

//weather API to get data from other server
const API_KEY = "9a5eeb9566eb2bb30c82da7a09dc54c9";
const COORDS = "coords";

//#5 setting weather API
function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      //console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    }); //then calls a function once data load completes
}
//#4 convert obj into string
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//#3 when getting Geo sucesses
function handleGeoSuccess(position) {
  //console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // object = variable
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude.longitude);
}

//#4 when getting Geo fails
function handleGeoError(position) {
  console.log("cant access geo location");
}

//#2 get cords by using API
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

//#1 load cords
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //#6  getweather when loadedCoords !== null
    const parseCoords = JSON.parse(loadedCoords);
    //console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
