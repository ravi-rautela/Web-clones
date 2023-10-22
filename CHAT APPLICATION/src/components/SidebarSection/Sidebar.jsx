import React from "react";
import Navbar from '../SidebarSection/Navbar'
import Search from '../SidebarSection/Search'
import Chats from "./Chats";

function Sidebar() {
  return <div className="sidebar">
    <Navbar />
    <Search />
    <Chats/>
  </div>;
}

export default Sidebar;
