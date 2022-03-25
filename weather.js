'use strict'
const axios = require('axios');

async function getWeather(request, response){
  try{
  // let cache = {
  //   weatherCityData:{}
  //   timestamp:

  // }
  let searchQueryCity = request.query.searchQueryCity;

  // create a key for what user has searched for

  // let key = searchQueryCity + 'Data'; //

  // if(cache[key] && (Date.now() - cache[key].timestamp < 1000 * 60 * 60 * 24 * 30)){
  //   response.send(cache[key].data);
  // }
  
  // else{

  // }

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
} catch(error){
  next(error);
}

}

class Forecast {
  constructor(element) {
    this.forecast = element.datetime;
    this.description = element.weather.description;
  }
}


module.exports = getWeather;