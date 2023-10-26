import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import SocialMediaLinks from "./Components/SocialMediaLinks";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ProjectInformation1 from "./Components/Project/ProjectInformation1";
import ScrollToTop from "./Components/ScrollToTop";

// import GoToTop from "./Components/GoToTop";

function App() {
  return (
    <div className="text-4xl font-bold ">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/:id" element={<ProjectInformation1 />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {/* <GoToTop /> */}
      <SocialMediaLinks />
    </div>
  );
}

export default App;
