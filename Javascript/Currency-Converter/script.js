const getRate = document.querySelector("#getRate");
const container = document.querySelector(".container");

getRate.addEventListener("click", (e) => {
  fetch(
    "https://v1.nocodeapi.com/suyashpradhan/cx/TeoCYcoyaSJKNPQb/rates"
  ).then((Response) => {
    Response.json().then((data) => {
      let dataObj = data.rates;
      container.innerHTML = dataObj;
    });
  });
  e.preventDefault();
});
