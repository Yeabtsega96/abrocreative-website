import "./style/faqs.css";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <section className="resources" aria-label="Helpful resources and navigation links">

      <h3>Helpful Resources</h3>

      <div className="resource-cards">

        <article className="resource-card">
          <h4>View Our Services</h4>
          <p>Learn about all the web design services we offer</p>
          <Link to="/services">Services</Link>
        </article>

        <article className="resource-card">
          <h4>See Our Pricing</h4>
          <p>Transparent pricing for all our packages</p>
          <Link to="/pricing">Pricing</Link>
        </article>

        <article className="resource-card">
          <h4>View Our Work</h4>
          <p>See examples of websites we've created</p>
          <Link to="/portfolio">Portfolio</Link>
        </article>

      </div>

    </section>
  );
};

export default Resources;