import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  console.log(video);
  const src = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="ui container">
      <iframe src={src} title={video.snippet.title} />
    </div>
  );
};

export default VideoPlayer;
