import "./ModalElement.scss";

export default function ModalElement() {
    return (
        <div className="places">
            <div className="places__img">
                <p className="places__img-placeholder">x</p>
            </div>
            <h1 className="places__header">
                Microsoft <span className="places__header-span">Places</span>
            </h1>
        </div>
    );
}
