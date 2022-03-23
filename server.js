'use strict';

// REQUIRE
// In our servers, we have to use 'require' instead of import. Here we will list the requirements for server

const express = require('express');
require('dotenv').config();
let data = require('./data/weather.json');
console.log(data[0].city_name);


// we must include cors if we want to share resources over the web
const cors = require('cors');


// USE
// Once we have required something, we have to use it. This is where we assign the required field a variable. React does this in one step with "import." express takes 2 steps: 'require" and 'use.'
const app = express();
app.use(cors());

// define PORT and validate that my .env file is working
const PORT = process.env.PORT || 3002;
// if my server is running on 3002, I know something is wrong with my .env file or how I'm importing the values from it.


// ROUTES
// We will write our endpoints here
// app.get() correlates to axios.get
app.get('/weather', (req, res,next) => {
  try {
    let cityQuery = req.query.searchQuery;
    // res.send(cityQuery);


    let cityObject = data.find(cityData => cityData.city_name.toLowerCase() === cityQuery.toLowerCase())
    

    
    let weatherData = [];
    cityObject.data.filter((element) => {
      let forecast = new Forecast(element);
      weatherData.push(forecast);
    })
   
    res.send(weatherData);
    

  } catch(error) {
    next(error);
  }
}); 





app.get('*',(request,response) => {
  response.send('what you are looking for doesn\'t exist.');
})

class Forecast {
  constructor(element){
    this.forecast = element.datetime;
    this.description = element.weather.description;
  }
}



// Errors





// listen

app.listen(PORT, (weather) => console.log(`listening on port ${PORT}`));
