import "./MSPlacesWaitingPage.scss";
import ModalElement from "../../components/ModalElement/ModalElement";

export default function MSPlacesWaitingPage() {
    return (
        <div className="background">
            <ModalElement />
            <div className="waiting">
                <div className="waiting__content">
                    <h2><span className="waiting__content-header">Connect</span> through thoughtfully considered prompts</h2>
                    <p>
                        “If you were left on a deserted island with either your worst enemy or a
                        mirror pointed towards you 24/7, which one would you choose? Why?”
                    </p>
                </div>
            </div>
        </div>
    );
}
