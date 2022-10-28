import "./styles/App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MSPlacesPage from "./pages/MSPlacesPage/MSPlacesPage";
import MSPlacesWaitingPage from "./pages/MSPlacesWaitingPage/MSPlacesWaitingPage";
import MSPlacesDiscussPage from "./pages/MSPlacesDiscussPage/MSPlacesDiscussPage";
import MSVideoPage from "./pages/MSVideoPage/MSVideoPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="ms-image">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/places" element={<MSPlacesPage />} />
                        <Route path="/waiting" element={<MSPlacesWaitingPage />} />
                        <Route path="/discuss" element={<MSPlacesDiscussPage />} />
                        <Route path="/live" element={<MSVideoPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
