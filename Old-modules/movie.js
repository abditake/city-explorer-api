// 'use strict';
// const axios = require('axios');


// async function getMovies(req, res){

//     let movieQueryCity = req.query.movieQueryCity;
//     let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MovieApi_Key}&query=${movieQueryCity}`;
    
//     let movieObject = await axios.get(url);
  
//     let movieObjectData = movieObject.data;
    
    
    
//     let movieArray = movieObjectData.results.map(e => new Movie(e));
//     res.send(movieArray);
  
// }
// class Movie{
//   constructor(e){
//     console.log(e);
//     this.title = e.original_title;
//     this.description = e.overview;
//     this.avgVotes = e.vote_average;
//     this.totalVotes = e.vote_count;
//     this.popularity = e.popularity;
//     this.releasedOn = e.released_date;
//     this.img = e.backdrop_path;
//   }
// }

// module.exports = getMovies;