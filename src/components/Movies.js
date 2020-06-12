import React, {useState} from "react";
import Movie from './Movie'
import MovieForm from './MovieForm'


export default function Movies () {
  const [movies, setMovies] = useState ([
    {id: 1, title: "Gattaca", rating: 5, comments: "Great Movie!"},
    {id: 2, title: "Interstellar", rating: 4, comments: "Awesome!"},
    {id: 3, title: "The Fountain", rating: 4, comments: "Wow!"},
  ])
    
  function editMovie (movieData) {
    const movies = this.state.movies.map((m) => {
      if (movieData.id === m.id) {
        return movieData
      }
      return m
    })
    this.setState({ movies })
  }

  function addMovie(movieData) {
    const movie = { id: `Math.random()`, ...movieData }
    const newMovie = [movie, ...this.state.movies]
    this.setState({
      movies: newMovie,
    })
  }

  const renderMovies = () => {
    return this.state.movies.map((movie) => {
      return <Movie key={movie.id} {...movie} edit={this.editMovie}/>
    })
  }

  return (
    <div>
      <h1>Movies</h1>
      {renderMovies()}
    </div>
  )
}