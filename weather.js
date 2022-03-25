'use strict'
const axios = require('axios');

async function getWeather(request, response){

  let searchQueryCity = request.query.searchQueryCity;
  // let weatherObject = data.find(element => element.city_name.toLowerCase() === citySearchQuery.toLowerCase())
  let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchQueryCity}&key=${process.env.WeatherAPI_Key}&days=3&lat=23&lon=155`;
  
  let weatherObject = await axios.get(url);
  console.log(weatherObject.data);
  let weatherData = [];
  weatherObject.data.data.filter((element) => {
    let selectedCity = new Forecast(element);
    weatherData.push(selectedCity);
  });
  response.send(weatherData);
  console.log(weatherObject);

}

class Forecast {
  constructor(element) {
    this.forecast = element.datetime;
    this.description = element.weather.description;
  }
}


module.exports = getWeather;