import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <div className="contact-cta">
      <h2 className="headline">Ready to Grow Your Business Online?</h2>

      <p className="sub-headline">
        Join Ethiopian businesses that are already getting more customers with a professional online presence.
      </p>

      {/* trust signals */}
      <div className="trust-row">
        <span>✔ Fast Delivery</span>
        <span>✔ Mobile Friendly</span>
        <span>✔ SEO Ready</span>
      </div>

      <div className="btns">
        {/* primary CTA */}
        <Link to="/contact" className="get-started-btn">
          Get Started Today <GrLinkNext />
        </Link>

        {/* secondary CTA */}
        <Link to="/services" className="contact-btn">
          View Services
        </Link>
      </div>
    </div>
  );
};

export default ContactCTA;