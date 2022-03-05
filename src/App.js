import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact-me" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
