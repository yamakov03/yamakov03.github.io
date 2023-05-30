import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "@react-hook/media-query";
import { Turn as Hamburger } from "hamburger-react";

const Link = ({ page, Page, setPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
    offset='70'
      className="hover:text-secondary-color font-Darker_Grotesque min-[760px]:text-2xl sm:text-6xl"
      href={`#${lowerCasePage}`}
      onClick={() => setPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, Page, setPage }) => {

  window.addEventListener("resize", (event) => {
    if (window.innerWidth > 760) {
      setIsToggled(false);
    }
  });

  const [isToggled, setIsToggled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 760px)");
  return (
    <nav
      className={`${
        isTopOfPage ? "" : "bg-white border-black border-b-[1px]"
      } z-40 w-full fixed top-0 py-3  `}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 ">
        <AnchorLink
          className="text__shadow text-5xl font-Syne font-bold"
          href={`#${"home"}`}
          role="button"
          onClick={() => setPage("home")}
        >
          DY
        </AnchorLink>

        {/* DESKTOP NAV */}
        {!isMobile ? (
          <div className="flex justify-between gap-16 text-lg font-semibold ">
            <Link page="Home" Page={Page} setPage={setPage} />
            <Link page="About" Page={Page} setPage={setPage} />
            <Link page="Projects" Page={Page} setPage={setPage} />
            <Link page="Contact" Page={Page} setPage={setPage} />
          </div>
        ) : (
          <div className="z-40">
            <Hamburger
              onToggle={(toggled) => {
                if (toggled) {
                  setIsToggled(!isToggled);
                } else {
                  setIsToggled(!isToggled);
                }
              }}
            />
          </div>
        )}

        {/* MOBILE MENU POPUP */}
        {isMobile && isToggled && (
          <div className="fixed right-0 bottom-0 h-full w-[300px] bg-white border-l-[1px] border-black">
            {/* MENU ITEMS */}
            <div className="ml-[17%] mt-[20vh] font-Darker_Grotesque">
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
