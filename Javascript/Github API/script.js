const id = "de6be280c64a29ddcd07";
const key = "a55c0577084afa30b9e635d0fbbdd8e17d42a302";
const form = document.querySelector("#form");
const input = document.querySelector("#user");
const submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  const user = input.value;
  console.log(user);
  if (user !== "") {
    getUsers(user)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  } else {
    alert("input value");
  }

  e.preventDefault();
});

async function getUsers(users) {
  let response_profile = await fetch(
    `https://api.github.com/users/${users}?client_id=${id}&client_secret=${key}`
  );

  let data_profile = await response_profile.json();
  return {
    data_profile,
  };
}
