import React from "react";
import { connect } from "react-redux";

import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";

export class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <table className="navBar">
          <tbody>
            <tr>
              <td>
                <img
                  src="https://www.graphicsprings.com/filestorage/stencils/30be204cf77d680e2c52b2abb6794503.png?width=50&height=50"
                  alt=""
                />
              </td>
              <td className="pageTitle">
                <h3>Movie Search DB</h3>
              </td>
            </tr>
          </tbody>
        </table>
        <SearchBar />

        <div>
          {this.props.movies.results.map((movie) => {
            return (
              <ul>
                <MovieCard
                  title={movie.title}
                  releaseDate={movie.release_date}
                  summary={movie.overview}
                  rating={movie.vote_average}
                  imgUrl={movie.poster_path}
                />
              </ul>
            );
          })}
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
