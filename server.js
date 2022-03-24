'use strict';
require('dotenv').config();


// REQUIRE
// In our servers, we have to use 'require' instead of import. Here we will list the requirements for server

const express = require('express');
const app = express();

// we must include cors if we want to share resources over the web
// ALLOWS SHARING BETWEEN MULTIPLE COMPUTERS
const cors = require('cors');
const axios = require('axios');
app.use(cors());


// USE
// Once we have required something, we have to use it. This is where we assign the required field a variable. React does this in one step with "import." express takes 2 steps: 'require" and 'use.'
// TELLING APP TO USE CORS

// define PORT and validate that my .env file is working
const PORT = process.env.PORT || 3002;
// if my server is running on 3002, I know something is wrong with my .env file or how I'm importing the values from it.


// ROUTES
// We will write our endpoints here
// app.get() correlates to axios.get
// instantiation of express
// app.get('/weather', async (req, res, next) => {
//   try {
//     let cityQuery = req.query.searchQuery;
//     // res.send(cityQuery);

//     let name = req.query.searchQuery.toLowerCase();

//     // let url = 'https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&key={WeatherAPI_Key}&lat=47.6062&lon=122.3321'

//     let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&key=${WeatherAPI_Key}&lat=47.6062&lon=122.3321`;


//     let weatherObject = await axios.get(url);

//     let weatherData = [];

//      weatherObject.data.find(cityData =>
//       cityData.city_name.toLowerCase() === name)

//       weatherObject.data.find((element) => {
//       let forecast = new Forecast(element);
//       weatherData.push(forecast);
//     })

//     res.send(weatherData);
//   } catch (error) {
//     next(error);
//   }
// });
app.get('/weather', async (request, response) => {

  try {
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
} catch (error) {
  // next(error); // SEND TO app.use down below
  console.log(error);
}
  });

app.get('/movie', async (req,res) =>{
  try{
    let movieQueryCity = req.query.movieQueryCity;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MovieApi_Key}&query=${movieQueryCity}`;
    

    

    let movieObject = await axios.get(url);
  
    let movieObjectData = movieObject.data;
    
    
    
    let movieArray = movieObjectData.results.map(e => new Movie(e));
    res.send(movieArray);
  }catch(error){
    // next(error);
  }
});


app.get('*', (request, response) => {
  response.send('Page not found: error=you....just kidding');
})


class Forecast {
  constructor(element) {
    this.forecast = element.datetime;
    this.description = element.weather.description;
  }
}

class Movie{
  constructor(e){
    console.log(e);
    this.title = e.original_title;
    this.description = e.overview;
    this.avgVotes = e.vote_average;
    this.totalVotes = e.vote_count;
    this.popularity = e.popularity;
    this.releasedOn = e.released_date;
    this.img = e.backdrop_path;
  }
}


// Errors
app.use((error, req, res, next) => {
  res.status(500).send(error.message);
})


// listen

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
