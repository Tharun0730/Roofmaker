import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage/heropage";
import About from "../Pages/Aboutpage/about";
import ContactUS from "../Pages/ContactUS/contactUs";
import Servicepage from "../Pages/servicePage/service";
import StandingSeam from "../Pages/Projects/StandingSeam";
import SandwichPanel from "../Pages/Projects/SandwichPanel";
import WalkwayAndFall from "../Pages/Projects/WalkwayAndFall";
import Projects from "../Pages/Projects/Projects";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/standingSeam" element={<StandingSeam/>}/>
        <Route path="/sandwichPanel" element={<SandwichPanel/>}/>
        <Route path="/walkwayAndFall" element={<WalkwayAndFall/>}/>
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}
