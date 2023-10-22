import React from "react";
import "./sidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const Sidebar = ({ likes, comment, share }) => {
  const [like, setLike] = useState(false);
  return (
    <>
      <div className="videoSlider">
        <div className="sidebar__buttons">
          {like ? (
            <FavoriteIcon
              fontSize="large"
              onClick={(e) => {
                setLike(false);
              }}
            />
          ) : (
            <FavoriteBorderIcon
              fontSize="large"
              onClick={(e) => {
                setLike(true);
              }}
            />
          )}

          <p>{likes ? likes + 1 : likes}</p>
        </div>
        <div className="sidebar__buttons">
          <MessageIcon fontSize="large" />
          <p>{comment}</p>
        </div>
        <div className="sidebar__buttons">
          <ShareIcon fontSize="large" />
          <p>{share}</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
