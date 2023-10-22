import React, { useRef, useState } from "react";
import "./video.css";
import Videofooter from "./Videofooter";
import Sidebar from "./Sidebar";

const Video = ({ url, channel, description, song, likes, comment, share }) => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const handleOnClick = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <>
      <div className="videos">
        <video
          className="video__player"
          onClick={handleOnClick}
          ref={videoRef}
          loop
          src={url}
        ></video>
        {/* Video footer */}
        <Videofooter channel={channel} description={description} song={song} />
        {/* video sidebar */}
        <Sidebar likes={likes} comment={comment} share={share} />
      </div>
    </>
  );
};

export default Video;
