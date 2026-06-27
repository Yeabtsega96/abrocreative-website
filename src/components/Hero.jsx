import heroImg from "../assets/images/hero-img1.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-content">
        <h1>
          Affordable Websites That Help{" "}
          <span>Ethiopian Businesses</span> Grow Faster
        </h1>

        <p>
          We design modern, mobile-friendly websites that build trust, attract
          customers, and turn visitors into real clients.
        </p>

        {/* trust signals */}
        <div className="trust-row">
          <span>✔ Fast Delivery</span>
          <span>✔ Mobile Optimized</span>
          <span>✔ SEO Ready</span>
        </div>

        {/* CTA buttons */}
        <div className="btns">
          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>

          <Link to="/portfolio" className="view-portifolio-btn">
            View Portfolio
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-img-div">
        <img src={heroImg} loading="lazy" alt="Abol Creative web design preview" />

        <div className="satisfaction">
          <span>🚀 Results-Driven Design</span>
          <span>⚡ Modern & Fast Websites</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;