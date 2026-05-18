function updateData(response) {

  let temperatureValue = document.querySelector("#weather-value");
   temperatureValue.innerHTML = Math.round(response.data.temperature.current);
   let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.city;
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
