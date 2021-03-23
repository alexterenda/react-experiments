import React, { Component } from "react";
import SearchBar from "./components/search_bar";
import Gif from "./components/gif";
import GifList from "./components/gif_list";
import giphy from "giphy-api";

const GIPHY_API_KEY = "1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "RoFXqXWN639Qs",
    };
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  search(query) {
    const giphyEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`;
    fetch(giphyEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const gifs = data.data.map((gif) => gif.id);
        this.setState({
          gifs: gifs,
        });
      });
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
