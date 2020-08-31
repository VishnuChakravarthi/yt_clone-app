import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  console.log(video);
  const src = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={src} title={video.snippet.title} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
