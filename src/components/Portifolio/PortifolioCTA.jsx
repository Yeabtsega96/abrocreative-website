import "./style/portfolio.css";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <section className="portfolio-cta" aria-label="Call to action for starting a project">

      <h2 className="headline">Want a Website Like These?</h2>

      <p className="sub-headline">
        Let's create a professional website that helps your business stand out and attract more customers.
      </p>

      <Link to="/contact" className="start-project-btn">
        Start Your Project
      </Link>

    </section>
  );
};

export default PortfolioCTA;