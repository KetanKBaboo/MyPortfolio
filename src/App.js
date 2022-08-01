import "./App.css";
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <About/>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
