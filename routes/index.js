var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");



const API_KEY = process.env.API_KEY;

router.get("/movies", (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((apiData) => {
      if (apiData) {
        return res.json({ movies: apiData });
      } else {
        return res.json({ result: false, error:"not found" });
      }
    });
});

module.exports = router;
