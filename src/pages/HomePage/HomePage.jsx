import "./HomePage.scss";
import ReactModal from "react-modal";
import MSPlacesPages from "../MSPlacesPage/MSPlacesPage";
import { useState } from "react";

function HomePage() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="homepage">
            <button onClick={openModal}>Hello</button>
            <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <MSPlacesPages closeModal={closeModal} />
            </ReactModal>
        </div>
    );
}

export default HomePage;
