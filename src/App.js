import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ScrollToTop from "./components/ScrollToTop";

import AboutPage from "./pages/about";
import ProjectPortfolioPage from "./pages/projectPortfolio";
import ContactPage from "./pages/contact";
import ProjectPage from "./pages/projects";
import Charlee from "./pages/charlee";
import RocketPage from "./pages/Rocket";
import SideProjects from "./pages/sideProjects";
import DuckPage from "./pages/duck";
import SeaPerchPage from "./pages/seaperch";
import HackathonPage from "./pages/hackathon";
import LightsaberPage from "./pages/Lightsaber";
import PCBPage from "./pages/PCBs";
import DronePage from "./pages/drones";

function App() {
  return (
    <Layout>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projectPortfolio" element={<ProjectPortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Charlee" element={<Charlee />} />
          <Route path="/Rocket" element={<RocketPage />} />
          <Route path="/sideProjects" element={<SideProjects />} />
          <Route path="/duck" element={<DuckPage />} />
          <Route path="/seaperch" element={<SeaPerchPage />} />
          <Route path="/hackathon22" element={<HackathonPage />} />
          <Route path="/Lightsaber" element={<LightsaberPage />} />
          <Route path="/PCBs" element={<PCBPage />} />
          <Route path="/drone" element={<DronePage />} />
        </Routes>
      </ScrollToTop>
    </Layout>
  );
}

export default App;
