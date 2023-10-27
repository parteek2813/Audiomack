import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./Style.css";
import SidebarMenuIcon from "../../assets/sidebar_menu_icon.svg";
import BottomMenuIcon from "../../assets/Bottom_menu_icon.svg";
import StrokeVector from "../../assets/stroke_vector.svg";
import SongImage from "../../assets/images/song_image.jpeg";
import YellowPlay from "../../assets/yellow_play.svg";
import Dustbin from "../../assets/dustbin.svg";

function PlayerScreen() {
  return (
    <>
      <div className="flex flex-row">
        {/* SIDEBAR - Can be broken down into different components too*/}
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

        <div className="flex flex-col">
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
            <img className="stroke_vector_svg" src={StrokeVector} />
          </div>

          <div className="flex flex-row">
            <p className="songNameText">SONG NAME</p>
            <p className="sourceNameText">SOURCE</p>
            <p className="addedOnNameText">ADDED ON</p>
          </div>
          <img className="stroke_vector_svg mt-[20px]" src={StrokeVector} />

          {/* We can also divide these below similar component into seprate component and then render one by one for more clear code*/}

          <div className="CentralMainContainer flex flex-row">
            <img className="SongImage" src={SongImage} />
            <p className="SongNameText">Song Name</p>
            <p className="youtubeNameText">Youtube</p>
            <p className="dateText">17/06/2021</p>
            <img className="yellowPlay" src={YellowPlay}></img>
            <img className="dustbinSvg" src={Dustbin}></img>
          </div>
          <div className="CentralMainContainer flex flex-row">
            <img className="SongImage" src={SongImage} />
            <p className="SongNameText">Song Name</p>
            <p className="youtubeNameText">Youtube</p>
            <p className="dateText">17/06/2021</p>
            <img className="yellowPlay" src={YellowPlay}></img>
            <img className="dustbinSvg" src={Dustbin}></img>
          </div>
          <div className="CentralMainContainer flex flex-row">
            <img className="SongImage" src={SongImage} />
            <p className="SongNameText">Song Name</p>
            <p className="youtubeNameText">Youtube</p>
            <p className="dateText">17/06/2021</p>
            <img className="yellowPlay" src={YellowPlay}></img>
            <img className="dustbinSvg" src={Dustbin}></img>
          </div>
          <div className="CentralMainContainer flex flex-row">
            <img className="SongImage" src={SongImage} />
            <p className="SongNameText">Song Name</p>
            <p className="youtubeNameText">Youtube</p>
            <p className="dateText">17/06/2021</p>
            <img className="yellowPlay" src={YellowPlay}></img>
            <img className="dustbinSvg" src={Dustbin}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerScreen;
