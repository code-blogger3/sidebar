import React from "react";
import '../App.css'
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return <><div className="sidebar"> <ul className="sidebarList">{SidebarData.map((val,key)=>{
    return (
      <li key={key} className="row" onClick={()=>{window.location.pathname=val.path}} id={window.location.pathname== val.path?"active":""}>
        <div id="icon">{val.icon}</div>
        <div id="title">{val.title}</div>
      </li>
    )
  })}</ul></div></>;
}

export default Sidebar;
