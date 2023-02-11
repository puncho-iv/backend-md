// will contain interfaces/classes/abstractions or implementations for DB methods
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