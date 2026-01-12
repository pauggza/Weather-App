function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

// currentDate.innerHTML = `${day} ${hours}:${minutes}`; change this so minutes have a 0 in front
//form id="search-form"
// Add a search engine: a search bar with a button. When searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function currentCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  let newCity = input.value;
  let h1 = document.querySelector("#city-display");
  h1.innerHTML = newCity;
  let apiKey = "abdo3735t57dabf46f1435bfa9b430dd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${newCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let currentTemperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#current-temperature-value");
  temperatureElement.innerHTML = currentTemperature;
}

let now = new Date();
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = formatDate(now);

let currentSearch = document.querySelector("#search-form");
currentSearch.addEventListener("submit", currentCity);
