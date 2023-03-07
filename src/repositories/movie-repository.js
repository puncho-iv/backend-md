// will contain interfaces/classes/abstractions or implementations for DB methods
import {Movie} from "../models/movie.js";
import {sequelize} from "./postgres.js"

export function getTopRatedMovies(repository) {
   return repository.getMovies({
    sort:("DESC", "rating"),
    filter:("first 20 movies")
});
}

export function getStreamingMovies(repository) {
    return repository.getMovies({
     sort:("DESC", "rating"),
     filter:("first 20 movies")
 });
 }

 export function getMoviesForRent(repository) {
    return repository.getMovies({
     sort:("DESC", "rating"),
     filter:("first 20 movies")
 });
 }

 export function getInTheatres(repository) {
    return repository.getMovies({
     sort:("DESC", "rating"),
     filter:("first 20 movies")
 });
 }

 export async function createMovie(movie) {
    return await Movie.create({
        name: movie.name,
        origin_country: movie.origin_country,
        first_air_date: movie.first_air_date
    });
 }