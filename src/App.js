import React, { useEffect, useState } from "react";
import Navbar from "./components/Nav";
import Home from "./scenes/Home";
import About from "./scenes/About";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

function App() {
  const [Page, setPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'corporate');

  const themes = [
    "light",
    "dark",
    "bumblebee",
    "emerald",
    "corporate",
    "garden",
    "forest",
    "wireframe",
    "black",
    "cmyk",
    "business",
    "acid",
    "lemonade",
    "night",
    "winter",
    "dim",
    "sunset",
  ]

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

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="overflow-x-hidden" data-theme={theme}>
      <Navbar isTopOfPage={isTopOfPage} Page={Page} setPage={setPage} />
      <Home setPage={setPage} />
      <About setPage={setPage} />
      <Projects />
      <Contact />
      <Footer />
      <div class="dropdown z-40 start-[10px]  fixed dropdown-right dropdown-top  bottom-[10px] flex justify-center ">
        <div tabindex="0" role="button" class="btn btn-lg m-1 btn-circle btn-primary border border-black hover:border-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
          </svg>

        </div>
        <ul tabindex="0" class="dropdown-content bg-base-300 h-[500px] overflow-scroll rounded-xl z-[1] w-52 p-2 shadow-none border border-black">
          {themes.map((themeName) => (
            <li key={themeName}>
              <button
                type=""
                name="theme-dropdown"
                class={`btn btn-sm btn-block btn-ghost justify-start z-[2] ${themeName === theme ? "bg-primary" : ""}`}
                aria-label={themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                value={themeName}
                onClick={handleThemeChange}
              >
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
