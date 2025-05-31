import React, {useState, useEffect} from 'react'
import MovieCard from '../Components/MovieCard'
import {searchMovies, getPopularMovies} from "../services/api.js"
import '../Css/Home.css'

const Home = () => {
    const[searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadPopualarMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch (e) {
                console.log(e);
                setError("Falied to load movies...")
            }
            finally {
                setLoading(false);
            }
        }
        loadPopualarMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return

        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch (e) {
            console.log(e);
            setError("Failed to search for movies....");
        }finally {
            setLoading(false);
        }

    }

  return (
    <div className='home'>
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder='Search for Movies...' 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button">Search</button>
        </form>

        {error && <div className='error-message'>{error}</div>}
        
        {loading ? (<div className="loading">Loading...</div>) : 
            (<div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />))}
            </div>)}
    </div>
  )
}

export default Home