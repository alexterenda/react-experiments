import React, { Component } from "react";
import SearchBar from "./components/search_bar";
import Gif from "./components/gif";
import GifList from "./components/gif_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "RoFXqXWN639Qs",
    };
  }

  render() {
    const gifs = [
      {
        id: "RoFXqXWN639Qs",
      },
      {
        id: "RoFXqXWN639Qs",
      },
    ];
    return (
      <div className="App">
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
