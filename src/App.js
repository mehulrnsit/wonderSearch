import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/index.js";
import LandingPage from "./Components/Landing Page/index.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/wonderSearch" element={<LandingPage />}/>
          <Route path="/wonderSearch/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
