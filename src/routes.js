// will code to register/glue routes to controller functions
import { getTopRatedMovies } from "./controllers/movie-controllers";
import { getStreamingMovies } from "./controllers/movie-controllers";
import { getInTheatres } from "./controllers/movie-controllers";
import { getMovies } from "./controllers/movie-controllers";
import { getMoviesForRent } from "./controllers/movie-controllers";
import { getTV } from "./controllers/movie-controllers";
import { getTrendingMovies } from "./controllers/movie-controllers";
import { getTrendingToday } from "./controllers/movie-controllers";

/**
 * This function binds routes to controller functions.
 *
 * @param {Express.Application} app express application
 */
export function setupRoutes(app) {
  app.get("/", (req, res) => {
    res.send("Start");
  });
}

app.get("/tv/top_rated?", (req, res) => {
  getTopRatedMovies(req, res);
});

app.get("/movie/now_playing?", (req, res) => {
  getStreamingMovies(req, res);
});

app.get("movie/popular?", (req, res) => {
  getMoviesForRent(req, res);
});

app.get("movie/upcoming?", (req, res) => {
  getInTheatres(req, res);
});

app.get("movie/top_rated?", (req, res) => {
  getMovies(req, res);
});

app.get("/tv/airing_today?", (req, res) => {
  getTV(req, res);
});

app.get("movie/297762/videos?", (req, res) => {
  getTrendingMovies(req, res);
});

app.get("trending/all/day?", (req, res) => {
  getTrendingToday(req, res);
});
