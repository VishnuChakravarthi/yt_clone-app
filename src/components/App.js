import React from "react";
import "../css/videoItem.css";
import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import axios from "../apis/youtube";

const KEY = "Your API Key";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit("cars");
  }

  onFormSubmit = async (term) => {
    const response = await axios.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });
    console.log(response.data.items[0]);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoClick = (video) => {
    this.setState({ selectedVideo: video });
    // console.log(this.state.selectedVideo);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoClick={this.onVideoClick}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
