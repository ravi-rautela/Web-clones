import React from "react";
import "./videofooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

const Videofooter = ({channel, description, song}) => {
  return (
    <div className="video__footer">
      <div className="text__content">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="video__ticker">
          <MusicNoteIcon className="ticker__icon" />
          <Ticker mode="smooth" className="ticker">
            {() => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <div className="tape__record">
        <img
          src="https://static.thenounproject.com/png/934821-200.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Videofooter;
