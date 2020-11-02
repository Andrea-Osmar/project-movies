import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const ApiKey = '40be626d591abb41158713818687432b'
  const movieListURL = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`

  useEffect(() => {
    fetch(movieListURL)
    .then((res) => res.json())
    .then(json => {
      setMovies(json.results) 
    })
  })

  return (
    <div className="popular-movies"> 
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img className="thumbnail" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
            <div className="popular-movie-info">
              <h2>{movie.original_title}</h2>
              <h3>Released {movie.release_date}</h3>
          </div>
        </Link>
      )
  )}</div>
)
}