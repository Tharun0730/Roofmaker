import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage/heropage";
import About from "../Pages/Aboutpage/about";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
