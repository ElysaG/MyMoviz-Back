var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY;

router.get("/movies", (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((apiData) => {
      if (apiData) {
        // Version initiale:
        // return res.json({ movies: apiData });
        const movies = apiData.results.map((movie) => ({
          title: movie.title,
          poster_path: movie.poster_path,
          overview: movie.overview,
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
        }));
        res.json({ movies }); //Renvoie un objet {movies:[]} comme dans la consigne!
      } else {
        return res.json({ result: false, error: "not found" });
      }
    });
});

module.exports = router;
