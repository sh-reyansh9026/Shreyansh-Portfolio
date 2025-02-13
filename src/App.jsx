import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Education,
  Works,
  StarsCanvas,
  Certifications,
} from "./components";
import Experience from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-r from- via-blue-950 to-cyan-900 ">
        <div>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Education />
        <Tech />

        <Works />
        <Experience />
        <Certifications />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
