import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./Style.css";
import SidebarMenuIcon from "../../assets/sidebar_menu_icon.svg";
import BottomMenuIcon from "../../assets/Bottom_menu_icon.svg";

function PlayerScreen() {
  return (
    <>
      <div className="flex flex-row">
        <div className="sidebar_container">
          <p className="logo_text">Logo</p>

          <div className="Menu_icon">
            <img className="SidebarMenuIconImg" src={SidebarMenuIcon} />
            <p className="menu_icon_text">Songs</p>
            <div className="SidebarStick"></div>
          </div>

          <div className="BottomMenuIcon">
            <img className="BottomMenuIconImg" src={BottomMenuIcon} />
            <p className="BottomMenuText">Logout</p>
          </div>
        </div>

        <div className="centerMainContainer">
          {/* Upper Center Container */}
          <div className="centerContainer">
            <p className="first_text">First-level Menu</p>
            <p className="first_slash">/</p>
            <p className="second_text">Second-level Menu</p>
            <p className="second_slash">/</p>
            <p className="third_text">Current Page</p>
          </div>

          {/* Lower Upper Center Container */}

          <div className="LowerLeftCenterContainer">
            <p className="LowerLeftText">Songs</p>
            <button className="LowerLeftButton">
              <p className="textAddSongs">Add Songs</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerScreen;
