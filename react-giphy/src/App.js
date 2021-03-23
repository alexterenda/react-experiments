import React, { Component } from "react";
import SearchBar from "./components/search_bar";
import Gif from "./components/gif";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif />
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
