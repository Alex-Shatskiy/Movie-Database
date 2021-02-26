import React from "react";
import SearchBar from "./SearchBar";

export class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <SearchBar />
      </div>
    );
  }
}

export default App;
