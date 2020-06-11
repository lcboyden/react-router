import React from 'react'
import {Header, Rating} from 'semantic-ui-react'
import Movie from './Movie'


class Movies extends React.Component {
  state = {
    movies: [
      {id: 1, title: "Gattaca", rating: 5, comments: "Great Movie!"},
      {id: 2, title: "Interstellar", rating: 4, comments: "Awesome!"},
      {id: 3, title: "The Fountain", rating: 4, comments: "Wow!"},
    ]
  }

  editMovie = (movieData) => {
    const movies = this.state.movies.map((m) => {
      if (movieData.id === m.id) {
        return movieData
      }
      return m
    })
    this.setState({ movies })
  }

  addMovie = (movieData) => {
    const movie = { id: `Math.random()`, ...movieData }
    const newMovie = [movie, ...this.state.movies]
    this.setState({
      movies: newMovie,
    })
  }

  renderMovies() {
    return this.state.movies.map((movie) => {
      return <Movie key={movie.id} {...movie} edit={this.editMovie}/>
    })
  }

  render () {
    return (
      <div>
        <Header as="h1">Favorite Movies</Header>
        
        {this.renderMovies()}
      </div>
    )

  }

}

export default Movies