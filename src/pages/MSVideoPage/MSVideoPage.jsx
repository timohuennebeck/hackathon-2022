import "./MSVideoPage.scss";
import Countdown from "react-countdown";
import Camera from "../../assets/images/Camera off.png";
import Microphone from "../../assets/images/Microphone.png";
import Share from "../../assets/images/Share Screen.png";
import More from "../../assets/images/More.png";
import Hand from "../../assets/images/Hand.png";
import Chat from "../../assets/images/Chat.png";
import Participants from "../../assets/images/Participants.png";
import EndCall from "../../assets/images/End Call.png";
import { Link } from "react-router-dom";

export default function MSVideoPage() {
    const Completionist = () => <span>You are good to go!</span>;

    return (
        <div className="video">
            <div className="video__images">
                <div className="video__images-indv-1"></div>
                <div className="video__images-indv-2"></div>
                <div className="video__images-indv-3"></div>
                <div className="video__images-indv-4"></div>
                <div className="video__images-indv-5"></div>
                <div className="video__images-indv-6"></div>
            </div>
            <div className="video__content">
                <h2 className="video__content-header">10min to discuss</h2>
                <p className="video__content-paragraph">
                    “If you were left on a deserted island with either your worst enemy or a mirror
                    pointed towards you 24/7, which one would you choose? Why?”
                </p>
            </div>
            <div className="video__timer">
                <Link to="/times-up" className="video__timer-link">
                    <Countdown date={Date.now() + 600000}>
                        <Completionist />
                    </Countdown>
                </Link>
            </div>
            <div className="video__tools">
                <div className="video__tools-icons">
                    <img src={Camera} alt="" />
                    <img src={Microphone} alt="" />
                    <img src={Share} alt="" />
                    <img src={More} alt="" />
                    <img src={Hand} alt="" />
                    <img src={Chat} alt="" />
                    <img src={Participants} alt="" />
                    <img src={EndCall} alt="" />
                </div>
            </div>
        </div>
    );
}
