import React from "react";
import { connect } from "react-redux";

import { getAllGenres } from "../actions/index";

import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieContainer from "./MovieContainer";

export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllGenres());
  }
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <SearchBar />
          <Switch>
            <Route exact path="/" component={MovieContainer} />
            <Route path="/search/:result" component={MovieContainer} />
            <Route path="/:status" component={MovieContainer} />
          </Switch>
        </Router>
        <div></div>
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
