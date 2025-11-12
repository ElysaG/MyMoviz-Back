var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const API_KEY = process.env.API_KEY;

router.get("/movies", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    );
    const apiData = await response.json();

    if (!apiData.results) {
      return res.json({ result: false, error: "pas de résultat API fetch" });
    }

    const movies = apiData.results.map((movie) => ({
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
    }));

    res.json({ movies }); //Renvoie un objet {movies:[]} comme dans la consigne!
  } catch (err) {
    console.error(err);
    return res.json({ result: false, error: "erreur au catch" });
  }
});

module.exports = router;
