// will contains service functions for movies
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";

class MovieService {
  async getTopRatedMovies() {
    const response = await axios.get(`${API_URL}/tv/top_rated?`);
    return response.data;
  }

  async getStreamingMovies() {
    const response = await axios.get(`${API_URL}/movie/now_playing?`);
    return response.data;
  }

  async getMoviesForRent() {
    const response = await axios.get(`${API_URL}/movie/popular?`);
    return response.data;
  }

  async getInTheatres() {
    const response = await axios.get(`${API_URL}/movie/upcoming?`);
    return response.data;
  }

  async getMovies() {
    const response = await axios.get(`${API_URL}/movie/top_rated?`);
    return response.data;
  }

  async getTV() {
    const response = await axios.get(`${API_URL}/tv/airing_today?`);
    return response.data;
  }

  async getTrendingMovies() {
    const response = await axios.get(`${API_URL}/movie/297762/videos?`);
    return response.data;
  }

  async getTrendingToday() {
    const response = await axios.get(`${API_URL}/trending/all/day?`);
    return response.data;
  }
}

export const movieService = new MovieService();
