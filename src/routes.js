// will code to register/glue routes to controller functions
import { getTopRatedMovies, getStreamingMovies, getInTheatres, getMovies, getMoviesForRent, getTV, getTrendingMovies, getTrendingToday, createMovie} from "./controllers/movie-controllers.js";

/**
 * This function binds routes to controller functions.
 *
 * @param {Express.Application} app express application
 */
export function setupRoutes(app) {
  app.get("/", (req, res) => {
    res.send("Start");
  });

  app.get("/tv/top_rated?", (req, res) => {
    getTopRatedMovies(req, res);
  });

  app.get("/movie/now_playing?", (req, res) => {
    getStreamingMovies(req, res);
  });

  app.get("/movie/popular?", (req, res) => {
    getMoviesForRent(req, res);
  });

  app.get("/movie/upcoming?", (req, res) => {
    getInTheatres(req, res);     
  });

  app.get("/movie/top_rated?", (req, res) => {
    getMovies(req, res);
  });

  app.get("/tv/airing_today?", (req, res) => {
    getTV(req, res);
  });

  app.get("movie/297762/videos?", (req, res) => {
    getTrendingMovies(req, res);
  });

  app.get("/trending/all/day?", (req, res) => {
    getTrendingToday(req, res);
  });

  app.post("/movies", createMovie)

}

