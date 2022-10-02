import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/index.js";
import LandingPage from "./Components/Landing Page/index.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
