import "./MSVideoPage.scss";

export default function MSVideoPage() {
    return (
        <div className="video">
            <div className="video__images">
                <div className="video__images-indv corner__left-top">
                    <img src="" alt="" />
                </div>
                <div className="video__images-indv">
                    <img src="" alt="" />
                </div>
                <div className="video__images-indv corner__right-top">
                    <img src="" alt="" />
                </div>
                <div className="video__images-indv corner__left-bottom">
                    <img src="" alt="" />
                </div>
                <div className="video__images-indv">
                    <img src="" alt="" />
                </div>
                <div className="video__images-indv corner__right-bottom">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="video__content">
                <h2 className="video__content-header">10min to discuss</h2>
                <p className="video__content-paragraph">
                    “If you were left on a deserted island with either your worst enemy or a mirror
                    pointed towards you 24/7, which one would you choose? Why?”
                </p>
            </div>
            <div className="video__tools">
                <div className="video__tools-icons">
                    <div className="video__tools-icons-box">
                        <img src="" alt="" />
                    </div>
                    <div className="video__tools-icons-box">
                        <img src="" alt="" />
                    </div>
                    <div className="video__tools-icons-rectangle">
                        <img src="" alt="" />
                    </div>
                    <div className="video__tools-icons-box">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="video__tools-timer">
                    <p>10:00</p>
                </div>
            </div>
        </div>
    );
}
