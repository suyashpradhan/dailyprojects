//Getting Dom Elements
let addUserBtn = document.querySelector("#add-user");
let doubleBtn = document.querySelector("#double");
let millionaireBtn = document.querySelector("#millionaire");
let sortBtn = document.querySelector("#sort");
let totalWealthBtn = document.querySelector("#totalWealth");
let collection = document.querySelector(".collection");
let main = document.querySelector("#data");

//Default Few Users to be displayed
let displayedValues = [];
randomUsers();
randomUsers();

async function randomUsers() {
  const res = await fetch("https://randomuser.me/api");
  const dataJson = await res.json();
  const dataObj = dataJson.results[0];

  const generatedRandomUser = {
    name: `${dataObj.name.first} ${dataObj.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(generatedRandomUser);
}

//Adding Generated value to the array
let addData = (valueObj) => {
  displayedValues.push(valueObj);
  main.innerHTML = '<h2 class="generated-text">All Users</h2>';
  displayedValues.forEach((el) => {
    const lists = document.createElement("div");
    lists.classList.add("lists");
    lists.innerHTML = `<span>${el.name}</span> <span class='wealth'>$ ${el.money}</span>`;

    main.appendChild(lists);
  });
};

//Adding New Random Users
addUserBtn.addEventListener("click", (e) => {
  randomUsers();
  e.preventDefault();
});

//Double Wealth of each user
doubleBtn.addEventListener("click", (e) => {
  displayedValues.map((el) => {
    console.log(el.money * 2);
  });
  e.preventDefault();
});
