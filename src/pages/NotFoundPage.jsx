import { Link } from "react-router-dom";
import "./style/not-found.css";

const NotFoundPage = () => {
  return (
    <main className="not-found-page">
      <section className="not-found-content">
        <span className="error-code">404</span>

        <h1 className="title">Page Not Found</h1>

        <p className="sub-headline">
          Sorry, the page you're looking for doesn't exist or may have been
          moved. You can return to the homepage or explore our services.
        </p>

        <div className="actions">
          <Link to="/" className="primary-btn">
            Back to Home
          </Link>

          <Link to="/services" className="secondary-btn">
            View Services
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;