import React from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";

function MovieContainer(props) {
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
      <button></button>
    </>
  );
}

function mapPropsToState(store) {
  return {
    movies: store.movie,
  };
}
export default connect(mapPropsToState)(MovieContainer);
