import React from "react";
import Attach from "../../images/attach-file.png"
import Image from "../../images/image-gallery.png"


const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something..." autoComplete="off"/>
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={Image} alt="" />
        </label>
        <button className="btn3">Send</button>
      </div>
    </div>
  );
};

export default Input;
