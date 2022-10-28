import "./MSPlacesDiscussPage.scss";
import ModalElement from "../../components/ModalElement/ModalElement";

export default function MSPlacesDiscussPage() {
    return (
        <div className="background">
            <ModalElement />
            <div className="discuss">
                <div className="discuss__content">
                    <p>
                        “If you were left on a deserted island with either your worst enemy or a
                        mirror pointed towards you 24/7, which one would you choose? Why?”
                    </p>
                    <div className="discuss__content-buttons">
                        <div className="discuss__content-buttons-indv">
                            <p>Discuss in Public</p>
                        </div>
                        <div className="discuss__content-buttons-indv">
                            <p>Discuss in Private</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
