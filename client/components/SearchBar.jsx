import React from "react";

import { movieSearch } from "../apis/movies";

export class SearchBar extends React.Component {
  state = {
    search: "",
  };

  // componentDidMount = () => {
  //   movieSearch();
  // };

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  submit = () => {
    movieSearch(this.state.search);
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
            type="text"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
