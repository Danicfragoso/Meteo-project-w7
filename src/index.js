function searchCity(event) {
  event.preventDefault();
  let formInput = document.querySelector("#form-input");
  console.log(document.querySelector("#form-input"));
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
