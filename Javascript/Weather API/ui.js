class UI {
  constructor() {
    this.temperature = document.querySelector("#temperature");
    this.feels_like = document.querySelector("#feels_like");
    this.humidity = document.querySelector("#humidity");
    this.wind_speed = document.querySelector("#wind_speed");
    this.country = document.querySelector(".title");
  }

  construct(weather) {
    /* this.temperature.textContent = weather.main.temp;
    this.feels_like.textContent = weather.main.feels_like;
    this.humidity.textContent = weather.main.humidity;
    this.wind_speed.textContent = weather.wind.speed; */

    `<div class="card-container">
        <div class="row align-items-center mb-4">
            <div class="col-xl-8 col-sm-12 col-xs-12">
                <h2 class="title">${(this.country.textContent =
                  weather.sys.country)}</h2>
            </div>
            <div class="col-4">
                <h4 class="text-right text-white" id="temperature"><span></span></h4>
            </div>
        </div>

        <div class="row">
            <div class="col-xl-4 col-xs-6 col-sm-6">
                <h4 class="text" id="feels_like">Feels like: <span>281</span></h4>
            </div>
            <div class="col-xl-4 col-xs-6 col-sm-6">
                <h4 class="text" id="humidity">Humidity: <span>281</span></h4>
            </div>
            <div class="col-xl-4 col-xs-6 col-sm-6">
                <h4 class="text" id="wind_speed">Wind speed: <span>45</span></h4>
            </div>
        </div>
    </div>`;
  }
}
