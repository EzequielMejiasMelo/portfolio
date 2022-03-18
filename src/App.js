import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Software from "./pages/Software";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/portfolio" element={[<Home />, <About />, <Projects />]} />
        <Route path="/software" element={<Software />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={[<Home />, <About />, <Projects />]} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
