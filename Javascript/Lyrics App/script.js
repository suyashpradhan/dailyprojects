const form = document.querySelector("#form");
const input = document.querySelector("#search");
const searchBtn = document.querySelector("#submit");
const main = document.querySelector("main");
const lyricsWrapper = document.querySelector(".lyricsWrapper");
const actionWrapper = document.querySelector("#more");
const popup = document.querySelector(".popup-container");
const popupBody = document.querySelector(".popup-body");
const closeBtn = document.querySelector("#close");

//Empty Field
let emptyField = (msg) => {
  let errorMessage = document.createElement("div");
  errorMessage.className = "alert alert-danger mt-2 mb-2";
  errorMessage.innerHTML = msg;
  form.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, 2000);
};

//Lyrics Async Function
async function lyrics() {
  let userInput = input.value;
  let response = await fetch(`https://api.lyrics.ovh/suggest/${userInput}`);
  let data = await response.json();
  lyricsData(data);
}

//Lyrics Data Function
let lyricsData = (data) => {
  data.data.forEach((lyricsEl) => {
    //Creating Lyrics Div
    let lyricsLists = document.createElement("div");
    lyricsLists.className = "lyricsLists";
    lyricsLists.innerHTML = `<img src='${lyricsEl.album.cover}' class='image''></img>
        <div class='lyricsListInfo'>
                <h1 class="title">${lyricsEl.album.title}</h1>
                <h2 class="artistName">${lyricsEl.artist.name}</h2>
                <audio src="${lyricsEl.preview}" controls></audio>
        </div>
        <div>
            <button class="mt-4 lyricsBtn" id='open' data-songTitle="${lyricsEl.title}"  data-artist='${lyricsEl.artist.name}'>Get Lyrics</button>
        </div>
    `;
    lyricsWrapper.appendChild(lyricsLists);
  });
};

async function lyricsFunc(artistEl, songTitleEl) {
  let response = await fetch(
    `https://api.lyrics.ovh/v1/${artistEl}/${songTitleEl}`
  );

  let lyricsResponse = await response.json();
  let formattedLyrics = lyricsResponse.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

  popupBody.innerHTML = `<h4><strong>${artistEl}</strong> - ${songTitleEl}</h2>
            <span>${formattedLyrics}</span>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    setTimeout(() => {
      emptyField("Please enter some value");
    }, 1000);
  } else {
    lyrics();
  }

  input.value = "";
});

//Get Lyrics Event Listener
lyricsWrapper.addEventListener("click", (e) => {
  const targetedEl = e.target;
  if (targetedEl.tagName === "BUTTON") {
    const artistEl = targetedEl.getAttribute("data-artist");
    const songTitleEl = targetedEl.getAttribute("data-songTitle");
    lyricsFunc(artistEl, songTitleEl);
    popup.classList.add("active");
  }
  e.preventDefault();
});

//Close Modal Button
lyricsWrapper.addEventListener("click", (e) => {
  const targetedEl = e.target;
  if (targetedEl.tagName === "BUTTON") {
    popup.classList.add("active");
  }
  e.preventDefault();
});
