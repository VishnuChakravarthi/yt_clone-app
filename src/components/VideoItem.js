import React from "react";

const VideoItem = ({ video, onVideoClick }) => {
  // console.log(video);
  return (
    // <div className="ui container">
    <div className="ui items">
      <div className="video-item item" onClick={() => onVideoClick(video)}>
        <div className="image">
          <img
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url}
          />
        </div>
        <div className="content">{video.snippet.title}</div>
      </div>
      <div className="ui divider"></div>
    </div>
    // </div>
  );
};

export default VideoItem;
