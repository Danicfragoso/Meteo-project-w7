function updateData(response) {

  let temperatureValue = document.querySelector("#weather-value");
   temperatureValue.innerHTML = Math.round(response.data.temperature.current);
   let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
  let timeElement =document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);

}
function formatDate (date) {
  let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
 if (minutes < 10) {
  minutes = `0${minutes}`;
}
  return `${day}, ${hours}:${minutes}`;

}

function searchCity(city) {
  let apiKey = "ae33a3fba9364t0co66343008146ece1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateData);
}

function changeCity(event) {
  event.preventDefault();
  let formInput = document.querySelector("#form-input");
  searchCity(formInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);
searchCity ("Lisbon");
