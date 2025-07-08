import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
