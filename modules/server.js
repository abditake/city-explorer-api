// 'use strict';

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');

// const getWeather = require('./Old-modules/weather.js');

// const getMovie = require('./Old-modules/movie.js');

// const app = express();
// app.use(cors());

// const PORT = process.env.PORT || 3002;


// app.get('/weather', weatherHandler);
// app.get('/movie', movieHandler);

// function weatherHandler(request, response) {
//   const cityWeather = request.query.city;
//   getWeather(cityWeather)
//     .then(summaries => response.send(summaries))
//     .catch((error) => {
//       console.error(error);
//       response.status(200).send('Sorry. Something went wrong!')
//     });
// }

// function movieHandler(request, response) {
//   const movieCity = request.query.movieCity;
//   getMovie(movieCity)
//     .then(summaries => response.send(summaries))
//     .catch((error) => {
//       console.error(error);
//       response.status(200).send('Sorry. Something went wrong!')
//     });
// }

// app.use((error, req, res, next) => {
//   res.status(500).send(error.message);
// })

// app.listen(PORT, () => console.log(`Server up on ${process.env.PORT}`));