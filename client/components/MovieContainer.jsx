import React from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import { getMovies } from "../actions";
import { useParams } from "react-router-dom";

function MovieContainer(props) {
  // let pageUrl = props.match.params;
  // if (pageUrl.result) {
  //   props.dispatch(getMovies(pageUrl.result));
  // }

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
