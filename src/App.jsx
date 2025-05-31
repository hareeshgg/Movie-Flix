import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MovieCard from './Components/MovieCard'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import NavBar from './Components/NavBar'
import { MovieProvider } from './Contexts/MovieContext'

const App = () => {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favourites' element={<Favourites />}/>
        </Routes>
      </main>
    </MovieProvider>
    
  )
}

export default App