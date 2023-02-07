import {movie-services} from "../../components/services/movie-services" ;

// contains controller functions for movies CRUD
export function getTopRatedMovies(req, res) {
  //validation
  res.json (movie-services.getTopRatedMovies());
}

export function getStreamingMovies(req, res) {
  res.json( movie-services.getStreamingMovies());
}

export function getMoviesForRent(req, res) {
  return movieService.getMoviesForRent();
}

export function getInTheatres(req, res) {
  
  return movieService.getInTheatres();
}

export function getMovies(req, res) {
  return movieService.getMovies();
}

export function getTV(req, res) {
  return movieService.getTV();
}

export function getTrendingMovies(req, res) {
  return movieService.getTrendingMovies();
}

export function getTrendingToday(req, res) {
  return movieService.getTrendingToday();
}
