import React from "react";

const VideoItem = ({ video, onVideoClick }) => {
  // console.log(video);
  return (
    <div className="ui container" onClick={() => onVideoClick(video)}>
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img
              alt={video.snippet.title}
              src={video.snippet.thumbnails.default.url}
            />
          </div>
          <div className="content">
            {video.snippet.title}
            <div className="meta">
              <span>{video.snippet.description}</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">Additional Details</div>
          </div>
        </div>
      </div>
      <div className="ui divider"></div>
    </div>
  );
};

export default VideoItem;
