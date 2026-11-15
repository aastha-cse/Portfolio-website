import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBarComponent/NavBar";
import { Banner } from "./components/BannerComponent/Banner";
import { Skills } from "./components/SkillsComponent/Skills";
import { Projects } from "./components/ProjectsComponent/Projects";
import { Career } from "./components/CareerComponent/Career";
import { Contact } from "./components/ContactComponent/Contact";
import { Footer } from "./components/FooterComponent/Footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banner />
      <Career />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}
export default App;