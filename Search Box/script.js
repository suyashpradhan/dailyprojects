let input = document.querySelector("#input");
let lists = document.querySelectorAll(".lists");
let collection = document.querySelector(".collection");

input.addEventListener("keyup", (e) => {
  let userInput = e.target.value.toLowerCase();

  lists.forEach((item, index) => {
    let searchedQuery = item.textContent.toLowerCase();

    if (searchedQuery.includes(userInput)) {
      lists[index].style.display = "block";
    } else {
      lists[index].style.display = "none";
    }
  });
});
