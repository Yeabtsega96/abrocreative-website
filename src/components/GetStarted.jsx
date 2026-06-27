import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="get-started">
      <div className="content">
        <h2>Ready to Grow Your Business Online?</h2>

        <p>
          Let’s build a professional website that attracts customers, builds trust, and grows your revenue.
        </p>

        {/* trust / reassurance */}
        <div className="trust-row">
          <span>✔ Fast Delivery</span>
          <span>✔ Mobile Friendly</span>
          <span>✔ SEO Optimized</span>
        </div>

        <div className="btns">
          {/* primary action */}
          <Link to="/contact" className="get-started-btn">
            Get Started Today
          </Link>

          {/* secondary action */}
          <Link to="/pricing" className="view-pricing-btn">
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;