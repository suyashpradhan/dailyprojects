//Getting Dom Elements
let addUserBtn = document.querySelector("#add-user");
let doubleBtn = document.querySelector("#double");
let millionaireBtn = document.querySelector("#millionaire");
let sortBtn = document.querySelector("#sort");
let totalWealthBtn = document.querySelector("#total-wealth");
let collection = document.querySelector(".collection");
let refresh = document.querySelector("#refresh");
let main = document.querySelector("#data");

//Default Few Users to be displayed
let displayedValues = [];
randomUsers();
randomUsers();

//Updating Data
let updateData = (providedData = displayedValues) => {
  main.innerHTML = '<h2 class="generated-text">All Users</h2>';
  providedData.forEach((el) => {
    const lists = document.createElement("div");
    lists.classList.add("lists");
    lists.innerHTML = `<span>${
      el.name
    }</span> <span class='wealth'>${formatMoney(el.money)}</span>`;

    main.appendChild(lists);
  });
};

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
  updateData();
};

//Adding New Random Users
addUserBtn.addEventListener("click", (e) => {
  randomUsers();
  e.preventDefault();
});

//Double Wealth of each user
doubleBtn.addEventListener("click", (e) => {
  displayedValues = displayedValues.map((el) => {
    return {
      ...el,
      money: el.money * 2,
    };
  });

  updateData();
  e.preventDefault();
});

//Show Only Millionaries
millionaireBtn.addEventListener("click", (e) => {
  displayedValues = displayedValues.filter((filteredValue) => {
    return filteredValue.money > 1000000;
  });
  updateData();
  e.preventDefault();
});

//Sort By Richest
sortBtn.addEventListener("click", (e) => {
  e.preventDefault();

  displayedValues.sort((a, b) => {
    return b.money - a.money;
  });

  updateData();
});

//Calculate total money
totalWealthBtn.addEventListener("click", (e) => {
  const totalWealth = displayedValues.reduce(
    (acc, arr) => (acc += arr.money),
    0
  );
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h6 class='totalWealth'>Total Wealth : <span class='wealth'>${formatMoney(
    totalWealth
  )}</strong></h3>`;
  wealthEl.classList.add("totalWealthWrapper");
  main.appendChild(wealthEl);
  e.preventDefault();
});

//Money Format
function formatMoney(number) {
  return "Rs " + number.toFixed(2).replace(/\d(?=(\d{2})+\.)/g, "$&,");
}

refresh.addEventListener("click", (e) => {
  window.location.reload();
  e.preventDefault();
});
