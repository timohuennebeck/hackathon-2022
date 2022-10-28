import "./MSPlacesDiscussPage.scss";
import ModalElement from "../../components/ModalElement/ModalElement";

export default function MSPlacesDiscussPage() {
    return (
        <div className="background">
            <ModalElement />
            <div className="discuss">
                <div className="discuss__content">
                    <p className="discuss__content-paragraph">
                        “If you were left on a deserted island with either your worst enemy or a
                        mirror pointed towards you 24/7, which one would you choose? Why?”
                    </p>
                    <div className="discuss__content-buttons">
                        <button className="discuss__content-buttons-indv">Discuss in Public</button>
                        <button className="discuss__content-buttons-indv">
                            Discuss in Private
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
