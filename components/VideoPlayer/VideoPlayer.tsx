import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

import st from "./videoPlayer.module.css";

const VideoPlayer = ({ videoLink }: any) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const videoId = videoLink.split("v=")[1];

  return (
    <div className={st.order}>
      <div className={st.container}>
        <YouTube videoId={videoId} onReady={onPlayerReady} />
      </div>
    </div>
  );
};

export default VideoPlayer;
