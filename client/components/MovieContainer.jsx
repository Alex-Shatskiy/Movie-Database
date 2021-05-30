import React from "react"
import MovieCard from "./MovieCard"
import { connect } from "react-redux"
import { getMovies } from "../actions/index"

function MovieContainer(props) {
  const nextPage = () => {
    if (props.match.path == "/search/:result") {
      return props.dispatch(getMovies(props.match.params.result, 1))
    }
  }

  return (
    <>
      <ul className="movie-container">
        {props.movies.results.map((movie) => {
          return (
            <MovieCard
              title={movie.title}
              releaseDate={movie.release_date}
              summary={movie.overview}
              rating={movie.vote_average}
              imgUrl={movie.poster_path}
            />
          )
        })}
      </ul>
      <button onClick={() => nextPage()}>Next page</button>
    </>
  )
}

function mapPropsToState(store) {
  return {
    movies: store.movie,
  }
}
export default connect(mapPropsToState)(MovieContainer)
