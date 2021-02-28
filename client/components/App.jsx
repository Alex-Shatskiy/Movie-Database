import React from "react";
import { connect } from "react-redux";

import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" />
          </Switch>
        </Router>
        <SearchBar />
        <div>
          <ul className="movie-container">
            {this.props.movies.results.map((movie) => {
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
        </div>
      </>
    );
  }
}

function mapPropsToState(store) {
  return {
    movies: store.movie,
  };
}
export default connect(mapPropsToState)(App);
