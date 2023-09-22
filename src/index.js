let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let date = new Date();
let day = days[date.getDay()];
let hours = date.getHours();
if (hours < 10){
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10){
  minutes = `0${minutes}`;
}
let currentTime = `${day} ${hours}:${minutes}`;
let li = document.querySelector("#date");
li.innerHTML = currentTime;



function showCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#cityName").value;
  let heading = document.querySelector("h1");
  searchCity(cityName);
}
let form = document.querySelector("#searchForm");
form.addEventListener("submit", showCity);

function showWeather(response) {
  let cityName = response.data.name;
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  h1.innerHTML =`${cityName}`;
  temperatureElement.innerHTML = temperature;
}


function searchCity(city) {
  let apiKey = "e2d2959df01cc6a6d1f4e8cc2a455097";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function showPlace(position) {
  console.log({ position });
  let apiKey = "e2d2959df01cc6a6d1f4e8cc2a455097";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
//navigator.geolocation.getCurrentPosition(showPlace);

//function getCurrentPosition(position) {
  //navigator.geolocation.getCurrentPosition(showPlace);
//}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
