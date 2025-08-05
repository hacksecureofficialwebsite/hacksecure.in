import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ServiceForm from "./components/Services/ServiceForm";
import PartnerForm from "./components/Partners/PartnerForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<ServiceForm />} />
          <Route path="/partners" element={<PartnerForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
