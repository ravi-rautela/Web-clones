import React from "react";
import Add from '../../images/user.png'

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Add} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://cdn.pixabay.com/photo/2023/09/09/08/31/woman-8242672_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Message;
