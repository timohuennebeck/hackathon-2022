import "../styles/App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
