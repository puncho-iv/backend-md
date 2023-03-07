import { movieService } from "../services/movie-services-net.js";
import { movieServiceDb } from "../services/movie-services-db.js";

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

export async function createMovie(req, res){
  res.json((await movieServiceDb.createMovie(req.body)).toJSON());
}
