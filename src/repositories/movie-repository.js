// will contain interfaces/classes/abstractions or implementations for DB methods
export function getTopRatedMovies() {
    repository.getMovies()
    .sort=('arrange in desc order')
    .filter=('first 20 movies');
    return
}