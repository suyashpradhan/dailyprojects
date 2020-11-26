class API {
  constructor(city) {
    this.city = city;
    this.id = "62104b5ab2c7dd80b1db6b001fa79a0a";
  }

  /* async getWeather() {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.id}&units=metric`
    );

    let responseData = await response.json();

    return responseData;
  } */
}
