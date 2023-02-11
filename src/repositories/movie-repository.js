// will contain interfaces/classes/abstractions or implementations for DB methods
export function getTopRatedMovies() {
   return repository.getMovies({
    sort:("DESC", "rating"),
    filter:("first 20 movies")
});
}