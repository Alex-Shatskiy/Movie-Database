import React from "react"
import MovieCard from "./MovieCard"
import { connect } from "react-redux"
import { getMovies } from "../actions/index"

import {
  getMovies,
  getAllPopularMovies,
  fetchTopRatedMovies,
  fetchGenreMovies,
} from "../actions/index"

function MovieContainer(props) {
  let urlStatus = props.match.params.status
  let urlPath = props.match.path

  const nextPage = (pageNumber, command) => {
    let page = pageNumber
    if (command == "next") {
      page = page + 1
    } else {
      page = page - 1
    }

    if (urlPath == "/search/:result") {
      props.dispatch(getMovies(props.match.params.result, page))
    } else if (urlStatus == "popular") {
      props.dispatch(getAllPopularMovies(page))
    } else if (urlStatus == "top-rated") {
      props.dispatch(fetchTopRatedMovies(page))
    } else if (urlPath == "/genre/:status") {
      let genreId = props.genre.genres.find((genre) => {
        return genre.name == props.match.params.status
      })
      props.dispatch(fetchGenreMovies(genreId.id, page))
    }
    window.scrollTo(0, 0)
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
      <button onClick={() => nextPage(props.movies.page, "back")}>
        Back page
      </button>
      <button onClick={() => nextPage(props.movies.page, "next")}>
        Next page
      </button>
    </>
  )
}

function mapPropsToState(store) {
  return {
    movies: store.movie,
    genre: store.genre,
  }
}
export default connect(mapPropsToState)(MovieContainer)
