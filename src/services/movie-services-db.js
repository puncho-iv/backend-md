// will contains service functions for movies
import { createMovie } from "../repositories/movie-repository.js";

class MovieServiceDb {
  async createMovie(movie) {
    return await createMovie(movie)
  }
}

export const movieServiceDb = new MovieServiceDb();
