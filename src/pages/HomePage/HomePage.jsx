import "./HomePage.scss";

import timerIcon from "../../assets/images/317-box.png";
import videoIcon from "../../assets/images/Camera off.png";
import micIcon from "../../assets/images";



function HomePage() {
  return (
    <>
      <div className="homepage">
        <div className="nav">
          <div className="nav-container">

            <div>
              <img className="nav-container__timer" src={timerIcon} alt="timer"></img>
            </div>
            <div>
            <img className="nav-container__video" src={videoIcon} alt="timer"></img>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>

          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default HomePage;
