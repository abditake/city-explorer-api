'use strict'
const axios = require('axios');

async function getWeather(request, response){
  try{
 
  let searchQueryCity = request.query.searchQueryCity;

  let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchQueryCity}&key=${process.env.WEATHER_API_KEY}&days=3&lat&lon`;
  
  let weatherObject = await axios.get(url);
  
  let weatherData = [];
  weatherObject.data.data.filter((element) => {
    let selectedCity = new Forecast(element);
    weatherData.push(selectedCity);
  });
  
  response.send(weatherData);;
} catch(error){
  // next(error);
  console.log(error);
}

}

class Forecast {
  constructor(element) {
    this.forecast = element.datetime;
    this.description = element.weather.description;
  }
}


module.exports = getWeather;