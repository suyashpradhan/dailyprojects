const inputOne = document.querySelector("#input-one");
const currencyElOne = document.querySelector("#currency-one");
const inputTwo = document.querySelector("#input-two");
const currencyElTwo = document.querySelector("#currency-two");
const swapButton = document.querySelector("#swap");
let rateEl = document.querySelector("#rate");

let calculate = (e) => {
  const currencyOne = currencyElOne.value;
  const currencyTwo = currencyElTwo.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/bf20d81e49413a5d6c12871b/latest/${currencyOne}`
  ).then((response) => {
    response.json().then((data) => {
      const convertedRate = data.conversion_rates[currencyTwo];
      rateEl.innerHTML = `1 ${currencyOne} = ${convertedRate} ${currencyTwo}`;

      //For Getting Value inside input 2
      inputTwo.disabled = true;
      inputTwo.value = inputOne.value * convertedRate;
    });
  });
  e.preventDefault();
};

//Event Listeners
inputOne.addEventListener("input", calculate);
currencyElOne.addEventListener("change", calculate);
inputTwo.addEventListener("input", calculate);
currencyElTwo.addEventListener("change", calculate);

swapButton.addEventListener("click", (e) => {
  const tempValue = currencyElOne.value;
  currencyElOne.value = currencyElTwo.value;
  currencyElTwo.value = tempValue;
  calculate();
  e.preventDefault();
});
