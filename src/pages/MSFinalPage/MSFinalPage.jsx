import "./MSFinalPage.scss";
import ModalElement from "../../components/ModalElement/ModalElement";
import { Link } from "react-router-dom";
import Star from "../../assets/images/Star frame for export.png"


export default function MSFinalPage() {
    return (
        <div className="background">
            <ModalElement />
            <div className="final">
                <p className="final__paragraph">
                    Thank you for using Microsoft Places. Let us know how we did.
                </p>
                <div className="final__star">
                    <img className="final__star-indv" src={Star} alt="" />
                    <img className="final__star-indv" src={Star} alt="" />
                    <img className="final__star-indv" src={Star} alt="" />
                    <img className="final__star-indv" src={Star} alt="" />
                    <img className="final__star-indv" src={Star} alt="" />
                </div>
                <div className="final__buttons">
                    <Link to="/" className="final__buttons-link">Skip</Link>
                </div>
            </div>
        </div>
    );
}
