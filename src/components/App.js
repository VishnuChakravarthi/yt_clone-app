import React from "react";
import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import axios from "../apis/youtube";

const KEY = "AIzaSyCZ1NVntAt6ji5gcKJRXQ_cE_sryEbQiAg";

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
        <VideoPlayer video={this.state.selectedVideo} />
        <VideoList
          onVideoClick={this.onVideoClick}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
