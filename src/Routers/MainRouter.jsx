import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage/heropage";
import About from "../Pages/Aboutpage/about";
import ContactUS from "../Pages/ContactUS/contactUs";
import { Service } from "../components/service";
import Servicepage from "../Pages/servicePage/service";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/service" element={<Servicepage />} />
      </Routes>
    </BrowserRouter>
  );
}
