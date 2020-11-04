//http://api.icndb.com/jokes/random
let form = document.querySelector("#form");
let card = document.querySelector(".card");
let input = document.querySelector("#input");
let generateJokes = document.querySelector("#submit");

function generateJokesFunc() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const data = JSON.parse(xhr.responseText);

    for (jokes of data.value) {
      let collection = document.createElement("span");
      collection.classList.add("jokes");
      collection.innerHTML = `${jokes.joke}`;
      card.appendChild(collection);
    }
  };

  xhr.open("GET", `http://api.icndb.com/jokes/random/${input.value}`, true);
  xhr.send();
}

generateJokes.addEventListener("click", (e) => {
  if (input.value == "") {
    alert("Please Enter Valid Number");
  } else {
    generateJokesFunc();
  }

  e.preventDefault();
});
