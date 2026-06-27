import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import abolCreativeLogo from "../assets/logo-images/abol-creative-logo.png";
import { LuMenu, LuX } from "react-icons/lu";
import { IoCall } from "react-icons/io5";

import "./NavBar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // close menu on route change / ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="navbar">

      {/* LOGO */}
      <Link className="logo" to="/">
        <img
          src={abolCreativeLogo}
          alt="Abol Creative logo"
          className="logo-img"
        />
      </Link>

      {/* DESKTOP NAV */}
      <nav className="for-large-screen">
        <ul className="navbar-lists">
          {navLinks.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="contacts">
          <IoCall className="icon" />
          <span className="phone-number">+251 916 921 711</span>
        </div>
      </nav>

      {/* MOBILE TOP BAR */}
      <div className="for-small-screen">
        <span className="phone-number">+251 916 921 711</span>

        <button
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <LuX className="menu-icon" />
          ) : (
            <LuMenu className="menu-icon" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <>
          <div className="overlay" onClick={() => setIsMenuOpen(false)} />

          <div className="mobile-menu">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </>
      )}
    </header>
  );
};

export default NavBar;