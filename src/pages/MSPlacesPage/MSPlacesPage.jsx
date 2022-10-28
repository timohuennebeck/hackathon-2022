import "./MSPlacesPage.scss";
import ModalElement from "../../components/ModalElement/ModalElement";
import { Link } from "react-router-dom";

export default function MSPlacesPage() {
    return (
        <div className="background">
            <ModalElement />
            <div className="ms-places">
                <div className="ms-places__content">
                    <h3 className="ms-places__content-header">
                        Which place would you like to go to?
                    </h3>
                </div>
                <p className="ms-places__option">Choose an option below:</p>
                <div className="ms-places__boxes">
                    <div className="ms-places__boxes-indv">
                        <p>Chill</p>
                    </div>
                    <div className="ms-places__boxes-indv">
                        <p>Play</p>
                    </div>
                    <div className="ms-places__boxes-indv">
                        <p>Communicate</p>
                    </div>
                    <Link to="/waiting" className="remove-link">
                        <div className="ms-places__boxes-indv">
                            <p>Connect</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
