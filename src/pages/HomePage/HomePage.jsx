import "./HomePage.scss";

import timerIcon from "../../assets/images/317-box.png";
import videoIcon from "../../assets/images/Camera-off.png";
import micIcon from "../../assets/images/Microphone.png";
import shareIcon from "../../assets/images/Share-Screen (1).png";
import moreIcon from "../../assets/images/More.png";
import handIcon from "../../assets/images/Hand.png";
import chatIcon from "../../assets/images/Chat.png";
import participantsIcon from "../../assets/images/Participants.png";
import endIcon from "../../assets/images/End-Call.png";
import dropMenu from "../../assets/images/dropdown-menu.png";

import { useState } from "react";
import { Link } from "react-router-dom";
import MSPlacesPage from "../MSPlacesPage/MSPlacesPage";


function HomePage() {

const [isShown, setIsShown] = useState(false);

  const moreClick = () => {

    setIsShown(true) 

  };

  return (
    <>
      <div className="homepage">
        <div className="nav">
          <div className="nav__menu">
            <Link to={MSPlacesPage}>
            {isShown && <img
              className="nav__menu--photo"
              src={dropMenu}
              alt="drop-down-menu"
            ></img>}
            </Link>
          </div>
          <div className="nav__container">
            <div>
              <img
                className="nav__container--icon"
                src={timerIcon}
                alt="timer"
              ></img>
            </div>
            <div>
              <img
                className="nav__container--icon"
                src={videoIcon}
                alt="video"
              ></img>
            </div>
            <div>
              <img
                className="nav__container--icon"
                src={micIcon}
                alt="mic"
              ></img>
            </div>
            <div>
              <img
                className="nav__container--icon"
                src={shareIcon}
                alt="share"
              ></img>
            </div>
            <div>
              <button onClick={moreClick}>
                <img
                  className="nav__container--icon"
                  src={moreIcon}
                  alt="more"
                ></img>
              </button>
            </div>
            <div>
              <img
                className="nav__container--icon"
                src={handIcon}
                alt="hand"
              ></img>
            </div>
            <div>
              <img
                className="nav__container--icon"
                src={chatIcon}
                alt="chat"
              ></img>
            </div>
            <div>
              <img
                className="nav__container--icon"
                src={participantsIcon}
                alt="participants"
              ></img>
            </div>
            <div>
              <img
                className="nav__container--icon"
                src={endIcon}
                alt="end"
              ></img>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default HomePage;
