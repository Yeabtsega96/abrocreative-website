import { Link } from "react-router-dom";

import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import abolCreativeLogo from "../assets/logo-images/abol-creative-logo.png";


const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Business Websites",
  "Landing Pages",
  "Website Redesign",
  "Portfolio Websites",
  "Maintenance & Support",
  "Basic SEO Setup",
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cards">

        {/* BRAND SECTION */}
        <div className="footer-card">
          <div className="logo-card">
            <img src={abolCreativeLogo} className="logo" alt="Abol Creative logo" />
            <span>Abol Creative</span>
          </div>

          <p className="sub-headline">
            Building affordable, professional websites for Ethiopian small businesses.
          </p>

          <div className="social-medias">
            <a href="#"><LuFacebook /></a>
            <a href="#"><CiTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-card">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-card">
          <h3>Services</h3>
          <ul>
            {services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-card">
          <h3>Contact Us</h3>

          <div className="email-box">
            <MdOutlineEmail className="icon" />
            <span>info@abolcreateative.com</span>
          </div>

          <div className="call">
            <IoCall className="icon" />
            <span>+251 916 921 711</span>
          </div>

          <div className="development">
            <span>Developed by Abol Creative</span>
            <span>Developer: Yeabtsega Matewos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;