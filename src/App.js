import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="pt-24"> {/* reserve space for fixed navbar */}
        <div className="section-container">
          <Home />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
