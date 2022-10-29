import "./MSPlacesWaitingPage.scss";
import ModalElement from "../../components/ModalElement/ModalElement";
import { useNavigate } from "react-router-dom";

export default function MSPlacesWaitingPage() {
    const navigate = useNavigate();

    setTimeout(function () {
        window.onload = navigate("/discuss");
    }, 4000);

    return (
        <div className="background">
            <ModalElement />
            <div className="waiting">
                <div className="waiting__content">
                    <h2>
                        <span className="waiting__content-header">Connect</span> through
                        thoughtfully considered prompts
                    </h2>
                    <p className="waiting__content-paragraph">
                        “If you were left on a deserted island with either your worst enemy or a
                        mirror pointed towards you 24/7, which one would you choose? Why?”
                    </p>
                </div>
            </div>
        </div>
    );
}
