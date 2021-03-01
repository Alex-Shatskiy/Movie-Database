import React from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import { getAllPopularMovies } from "../actions";

function MovieContainer(props) {
  const loadMovie = () => {
    let urlStatus = props.match.params.status;
    if (urlStatus == "popular") {
      return props.dispatch(getAllPopularMovies());
    }
  };

  loadMovie();
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
          );
        })}
      </ul>
    </>
  );
}

function mapPropsToState(store) {
  return {
    movies: store.movie,
  };
}
export default connect(mapPropsToState)(MovieContainer);
