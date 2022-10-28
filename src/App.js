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
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
        </Routes>
        {/* <MSPlacesPage /> */}
        {/* <MSPlacesWaitingPage /> */}
        {/* <MSVideoPage /> */}
        {/* <MSPlacesDiscussPage /> */}
        <HomePage />
      </BrowserRouter>
    </>
  );
}

export default App;
