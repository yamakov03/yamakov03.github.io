import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "@react-hook/media-query";
import { Turn as Hamburger } from "hamburger-react";

const Link = ({ page, setPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      offset='55'
      className="hover:text-secondary font-Darker_Grotesque min-[1000px]:text-2xl sm:text-6xl transition-all"
      href={`#${lowerCasePage}`}
      onClick={() => setPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, Page, setPage }) => {

  window.addEventListener("resize", (event) => {
    if (window.innerWidth > 1000) {
      setIsToggled(false);
    }
  });

  const [isToggled, setIsToggled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <>
      <nav
        className={`${isTopOfPage ? "" : "bg-base-100 backdrop-blur-3xl bg-opacity-80  border-black border-b-[1px]"
          } z-50 w-full fixed top-0 py-1  `}
      >
        <div className="flex items-center justify-between w-5/6 mx-auto ">
          <AnchorLink
            className="text-5xl font-bold text__shadow font-Syne"
            href={`#${"home"}`}
            role="button"
            onClick={() => setPage("home")}
          >
            DY
          </AnchorLink>

          {/* DESKTOP NAV */}
          {!isMobile ? (
            <div className="flex justify-between gap-12 text-lg font-semibold ">
              <Link page="About" Page={Page} setPage={setPage} />
              <Link page="Projects" Page={Page} setPage={setPage} />
              <Link page="Contact" Page={Page} setPage={setPage} />
              <a className="hover:text-secondary font-Darker_Grotesque min-[1000px]:text-2xl sm:text-6xl transition-all" href="http://yamakov.tech/blog">Blog</a>
              <a className="hover:text-secondary font-Darker_Grotesque min-[1000px]:text-2xl sm:text-6xl transition-all" href="../assets/dy_resume_2024.pdf">Resume</a>
            </div>
          ) : (
            <div className="z-30">
              <Hamburger
                onToggle={(toggled) => {
                  if (toggled) {
                    setIsToggled(!isToggled);
                  } else {
                    setIsToggled(!isToggled);
                  }
                }}
                toggled={isToggled}
              />
            </div>
          )}


        </div>
      </nav>
      {/* MOBILE MENU POPUP */}
      {isMobile && isToggled && (
        <div className="fixed right-0 bottom-0 h-full w-[300px] bg-base-100 backdrop-blur-3xl bg-opacity-80 border-l-[1px] border-black z-30" >
          {/* MENU ITEMS */}
          <div className="ml-[12%] mt-[20vh] font-Darker_Grotesque">
            <div className="mb-4">
              <Link page="About" Page={Page} setPage={setPage} />
            </div>
            <div className="mb-4">
              <Link page="Projects" Page={Page} setPage={setPage} />
            </div>
            <div className="mb-4">
              <Link page="Contact" Page={Page} setPage={setPage} />
            </div>
            <div className="mb-4">
              <a className="hover:text-secondary font-Darker_Grotesque min-[1000px]:text-2xl sm:text-6xl transition-all" href="http://yamakov.tech/blog">Blog</a>
            </div>
            <div className="mb-4">
              <a className="hover:text-secondary font-Darker_Grotesque min-[1000px]:text-2xl sm:text-6xl transition-all" href="../assets/dy_resume_2024.pdf">Resume</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
