import "./style/faqs.css";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <section className="contact-card" aria-label="Help and support call to action">

      <h3>Still Have Questions?</h3>

      <p>
        Can't find the answer you're looking for? Our team is here to help!
        Contact us and we'll get back to you as soon as possible.
      </p>

      <div className="btns">

        <Link to="/contact" className="contact-btn">
          Contact Us
        </Link>

        <a href="tel:+251916921711" className="call-btn">
          Call Us: +251916921711
        </a>

      </div>

    </section>
  );
};

export default ContactCard;