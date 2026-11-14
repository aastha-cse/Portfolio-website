import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import {Career} from "./components/Career";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banner />
      <Career/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}
export default App;