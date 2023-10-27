import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./Style.css";
import SidebarMenuIcon from "../../assets/sidebar_menu_icon.svg";
import BottomMenuIcon from "../../assets/Bottom_menu_icon.svg";
import StrokeVector from "../../assets/stroke_vector.svg";
import SongImage from "../../assets/images/song_image.jpeg";
import YellowPlay from "../../assets/yellow_play.svg";
import Dustbin from "../../assets/dustbin.svg";
import leftPlayerLine from "../../assets/left_player_line.svg";
import rightPlayerLine from "../../assets/right_player_line.svg";
import eclipse from "../../assets/eclipse.svg";
import leftSong from "../../assets/leftSong.svg";
import rightSong from "../../assets/rightSong.svg";
import playPause from "../../assets/playPause.svg";
import { Link } from "react-router-dom";
import playSvg from "../../assets/play_svg.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index";

function PlayerScreen() {
  const songs = [
    "http://radio.stereoscenic.com/ama-h",
    "http://radio.stereoscenic.com/ama-s",
    "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
    "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
    "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [addSongs, setAddSongs] = useState(false);
  const [songName, setSongName] = useState(songs);
  const [songLink, setSongLink] = useState("");
  const [songSource, setSongSource] = useState("");
  const [songImage, setSongImage] = useState("");

  const handleAddSong = (e) => {
    const { value } = e.target;
    setSongName([...songs, value]);
    setAddSongs(!addSongs);
  };

  console.log(songName);

  useEffect(() => {
    const audio = new Audio(songs[currentSongIndex]);
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    // Cleanup audio when component unmounts or when the currentSongIndex changes
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [currentSongIndex, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };

  const playPreviousSong = () => {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };
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
            <Link to="/">
              <button className="BottomMenuText">Logout</button>
            </Link>
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

            {addSongs && (
              <div className="flex flex-row">
                <p className="ml-[200px]">Song Name</p>
                <input
                  className="ml-[50px] outline-none  w-[604px] mt-[2px] border-2 border-gray-200	rounded-lg "
                  type="text"
                  placeholder="URL"
                  onChange={(e) => handleAddSong(e.target.value)}
                />
                <button
                  className="BottomMenuText"
                  onClick={(e) => handleAddSong(e.target.value)}
                >
                  Add
                </button>
              </div>
            )}

            {/* Lower Upper Center Container */}

            <div className="LowerLeftCenterContainer">
              <p className="LowerLeftText">Songs</p>

              <button className="LowerLeftButton" onClick={handleAddSong}>
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

          <div className="lowerMostDiv flex flex-row relative">
            <img className="leftPlayerLine relative" src={leftPlayerLine} />
            <img className="eclipse absolute" src={eclipse} />
            <img className="rightPlayerLine" src={rightPlayerLine} />
          </div>

          <img className="playerSongImage absolute" src={SongImage} />
          <p className="lower_chaff">Chaff & Dust</p>
          <div className="flex flex-row">
            <img
              className="leftSong"
              src={leftSong}
              onClick={playPreviousSong}
            />
            {isPlaying ? (
              <img
                className="playPause"
                src={playPause}
                onClick={handlePlayPause}
              />
            ) : (
              <img
                className="playSvg "
                src={playSvg}
                onClick={handlePlayPause}
              />
            )}
            <img className="rightSong" src={rightSong} onClick={playNextSong} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerScreen;
