// 'use strict';

// const axios = require('axios');

// let cache = require('./cache.js');

// module.exports = getMovie;

// function getMovie(movieCity) {
//   console.log(movieCity);
//   const key = 'weather-' + movieCity;
//   const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MovieApi_Key}&query=${movieCity}`;
//   if (cache[key] && (Date.now() - cache[key].timestamp < 50000)) {
//     console.log('Cache hit');
//   } else {
//     console.log('Cache miss');
//     cache[key] = {};
//     cache[key].timestamp = Date.now();
//     cache[key].data = axios.get(url)
//     .then(response => parseMovie(response.data));
//   }
  
//   return cache[key].data;
// }
// function parseMovie(movieData) {
//   console.log(movieData);
//   try {
//     const movieSummaries = movieData.data.map(movie => {
//       return new Movie(movie)
//     });
//     return Promise.resolve(movieSummaries);
//   } catch (e) {
//     return Promise.reject(e);
//   }
// }


// class Movie{
//   constructor(item){
//     console.log(item.original_title);
//     this.title = item.original_title;
//     this.description = item.overview;
//     this.avgVotes = item.vote_average;
//     this.totalVotes = item.vote_count;
//     this.popularity = item.popularity;
//     this.releasedOn = item.released_date;
//     this.img = item.poster_path;
//   }
// }

// module.exports = getMovie;