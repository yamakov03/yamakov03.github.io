import React from "react";
import { useEffect, useState } from "react";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [Page, setPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isMobile = useMediaQuery("(max-width: 760px)");

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
    <div>
      <Navbar isTopOfPage={isTopOfPage} Page={Page} setPage={setPage} />
      <Home setPage={setPage} />
      <About setPage={setPage} />
    </div>
  );
}

export default App;
