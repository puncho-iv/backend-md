import { movieService } from "../../components/services/movie-services";

// contains controller functions for movies CRUD
export function getTopRatedMovies(req, res) {
  //validation
  res.json(movieService.getTopRatedMovies());
}

export function getStreamingMovies(req, res) {
  res.json(movieService.getStreamingMovies());
}

export function getMoviesForRent(req, res) {
  res.json(movieService.getMoviesForRent());
}

export function getInTheatres(req, res) {
  res.json(movieService.getInTheatres());
}

export function getMovies(req, res) {
  res.json (movieService.getMovies());
}

export function getTV(req, res) {
  res.json (movieService.getTV());
}

export function getTrendingMovies(req, res) {
  res.json (movieService.getTrendingMovies());
}

export function getTrendingToday(req, res) {
  res.json (movieService.getTrendingToday());
}
