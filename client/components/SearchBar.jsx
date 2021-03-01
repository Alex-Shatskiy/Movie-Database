import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../actions/index";

export class SearchBar extends React.Component {
  state = {
    search: "",
  };

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  submit = () => {
    this.props.dispatch(getMovies(this.state.search));
    this.setState({ search: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    this.submit();
  };

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.handleSubmit} className="search-form">
          <input
            className="search-bar"
            onChange={this.handleChange}
            placeholder="Search"
            type="text"
          />
          <Link to={`${this.state.search}`}>
            <button className="search-button" type="submit">
              Search
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

function mapPropsToState(store) {
  return {
    movies: store.movie,
  };
}

export default connect(mapPropsToState)(SearchBar);
