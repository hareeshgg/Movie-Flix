import { useMovieContext } from '../Contexts/MovieContext'
import MovieCard from '../Components/MovieCard'
import '../Css/Favourites.css'

const Favourites = () => {
  const {favorites} = useMovieContext()

  if (favorites) {
    return (
      <div className='favorites'>
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map(movie => (
            <MovieCard movie={movie} key={movie.id} />))}
        </div>
      </div>
      
    );
    
  }

  return (
    <div className='favorites-empty'>
        <h2>No Favourite Movies yet</h2>
        <p>Start adding movies to your favourites and they will appear here!</p>
    </div>
  )
}

export default Favourites