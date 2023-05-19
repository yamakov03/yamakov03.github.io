import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Nav";
import Home from "./scenes/Home";
import About from "./scenes/About";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

function App() {
  const [Page, setPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar isTopOfPage={isTopOfPage} Page={Page} setPage={setPage} />
        <Home setPage={setPage} />
        <About setPage={setPage} />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
