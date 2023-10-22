import React from "react";
import Add from "../../images/add.png";
import More from "../../images/more.png";
import Videocam from "../../images/video-camera.png";
import Messages from "./Messages";
import Input from './Input'

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Ravi Rautela</span>
        <div className="chatIcons">
          <img src={Videocam} alt="" title="not working" />
          <img src={Add} alt="" title="not working" />
          <img src={More} alt="" title="not working" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
}

export default Chat;
