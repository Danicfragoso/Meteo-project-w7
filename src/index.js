function searchCity(event) {
  event.preventDefault();
  let formInput = document.querySelector("#form-input");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = formInput.value;

 
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
