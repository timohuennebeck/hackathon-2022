import "./MSTimerPage.scss";
import ModalElement from "../../components/ModalElement/ModalElement";
import { Link } from "react-router-dom";

function MSTimerPage() {
    return (
        <div className="background">
            <ModalElement />
            <div className="timer">
                <h2 className="timer__header">Times up! What's next?</h2>
                <div className="timer__buttons">
                    <div className="timer__buttons-indv">
                        <Link className="timer__buttons-indv-link">
                            I want to talk about something new!
                        </Link>
                    </div>
                    <div className="timer__buttons-indv">
                        <Link className="timer__buttons-indv-link">I'm ready to wrap things up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MSTimerPage;
