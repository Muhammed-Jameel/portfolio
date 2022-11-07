import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import "./navbar.css";
import { NavLink } from "react-router-dom";


/* here is the list of all navigation links to be used later with ease */
const NavbarLinksList = () => (
  <>
    <NavLink to="/portfolio/Work" className="link">
      Work
    </NavLink>
    <NavLink to="/portfolio/About" className="link">
      About
    </NavLink>
    <NavLink to="/portfolio/Git" className="link">
      Get in touch
    </NavLink>
    <NavLink to="/portfolio/More" className="link">
      More
    </NavLink>
  </>
);


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="navbar_links_container">
        <NavLink to="/portfolio" className="link logo">
          MJ
        </NavLink>

        <NavbarLinksList />
      </div>

      <div className="toggle_menu">
        {toggleMenu ? (
          <IoMdClose
            color="#FAF8FF"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Fill
            color="#FAF8FF"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="menu_links">
            {" "}
            <NavLink to="/portfolio" className="link">
              Home
            </NavLink>{" "}
            <NavbarLinksList />{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
