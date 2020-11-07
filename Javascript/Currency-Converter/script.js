const getRate = document.querySelector("#getRate");
const container = document.querySelector(".container");

getRate.addEventListener("click", (e) => {
  fetch(
    "https://v1.nocodeapi.com/suyashpradhan/cx/TeoCYcoyaSJKNPQb/rates"
  ).then((response) => {
    response.json().then((data) => {
      console.log(data.rates);
    });
  });
  e.preventDefault();
});
