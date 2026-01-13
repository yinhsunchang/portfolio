import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const openNav = () => setOpen(true);
  const closeNav = () => setOpen(false);

  return (
    <>
    {/* Hidden Navbar */}
    <nav
      className="sidebar black animate-right xxlarge"
      style={{ display: open ? "block" : "none", paddingTop: "150px", right: 0, zIndex: 2, width: "60%" }}
      id="mySidebar"
    >
      <a
        href="#"
        className="button black xxxlarge display-topright"
        style={{ padding: "0 12px" }}
        onClick={closeNav}
      >
        <i className="fa fa-remove"></i>
      </a>

      <div className="bar-block center">
        {["home", "portfolio", "about", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="bar-item button text-grey hover-black"
            onClick={closeNav}
          >
            {t(`nav.${section}`)}
          </a>
        ))}
      </div>
    </nav>

    {/* Menu icon to open Navbar */}
    <span
      className="button top white xxlarge text-grey hover-text-black"
      style={{ width: "auto", right: 0, position: "fixed", top: "0" }}
      onClick={openNav}
    >
      <i className="fa fa-bars"></i>
    </span>
    </>
  );
}

export default Navbar
