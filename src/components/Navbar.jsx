import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "@react-hook/media-query";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Slant as Hamburger } from 'hamburger-react'

const Navbar = ({ isTopOfPage, Page, setPage }) => {
    window.addEventListener('resize', (event) => {
      if (window.innerWidth > 760) {
        setIsToggled(false)
      }
    })

    const Link = ({ page, Page, setPage }) => {
        const lowerCasePage = page.toLowerCase();
        return (
          <AnchorLink
            className={`${Page === lowerCasePage ? "" : ""} group relative`}
            href={`#${lowerCasePage}`}
            onClick={() => setPage(lowerCasePage)}
          >
            <span
              className={`${
                Page === lowerCasePage ? "w-full" : "group-hover:w-full"
              } absolute left-0 -bottom-1 ${isMobile ? "bg-blue-600 h-2": "bg-blue-600 h-1"} -z-10`}
            ></span>
      
            {page}
          </AnchorLink>
        );
      };
    

      


  const [isToggled, setIsToggled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 760px)");
  const navbarBackground = isTopOfPage ? "bg-white" : "bg-white";
  return (
    <nav
      className={`${navbarBackground} z-40 w-full fixed top-0 py-2 border-b-[1px] border-black`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <a className="text__shadow text-5xl font-Syne font-bold text-blue-600" onClick={() => setPage("home")} href="#" role="button">DY</a>

        {/* DESKTOP NAV */}
        {!isMobile ? (
          <div className="flex justify-between gap-16 text-md font-semibold">
            <Link page="Home" Page={Page} setPage={setPage} />
            <Link page="About" Page={Page} setPage={setPage} />
            <Link page="Projects" Page={Page} setPage={setPage} />
            <Link page="Contact" Page={Page} setPage={setPage} />
          </div>
        ) : (
          <div className="z-40">
          <Hamburger onToggle={toggled => {
          if (toggled) {
            setIsToggled(!isToggled)
          } else {
            setIsToggled(!isToggled)
          }
        }} />
        </div>
        )}

        {/* MOBILE MENU POPUP */}
        {isMobile && isToggled && (
          <div className="fixed right-0 bottom-0 h-full w-[300px] backdrop-blur-md">
            {/* MENU ITEMS */}
            <div className="ml-[23%] text-6xl mt-[100px] font-Darker_Grotesque">
              <div className="mb-4">
                <Link page="Home" Page={Page} setPage={setPage} />
              </div>
              <div className="mb-4">
                <Link page="About" Page={Page} setPage={setPage} />
              </div>
              <div className="mb-4">
                <Link page="Projects" Page={Page} setPage={setPage} />
              </div>
              <div className="mb-4">
                <Link page="Contact" Page={Page} setPage={setPage} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
