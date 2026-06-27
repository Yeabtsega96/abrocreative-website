import "./style/contact.css";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const ContactInfo = () => {
  return (
    <section className="contact-info-cards" aria-label="Contact information and business details">

      <div className="contact-info">
        <h3>Contact Information</h3>

        <ul>
          <li>
            <span aria-hidden="true">
              <IoCall className="icon" />
            </span>
            <div>
              <p className="info-title">Phone</p>
              <a href="tel:+251916921711" className="info">
                +251916921711
              </a>
            </div>
          </li>

          <li>
            <span aria-hidden="true">
              <MdOutlineEmail className="icon" />
            </span>
            <div>
              <p className="info-title">Email</p>
              <a href="mailto:info@abolcreative.com" className="info">
                info@abolcreative.com
              </a>
            </div>
          </li>

          <li>
            <span aria-hidden="true">
              <CiLocationOn className="icon" />
            </span>
            <div>
              <p className="info-title">Location</p>
              <p className="info">Addis Ababa, Ethiopia</p>
            </div>
          </li>

          <li>
            <span aria-hidden="true">
              <IoMdTime className="icon" />
            </span>
            <div>
              <p className="info-title">Business Hours</p>
              <p className="info">Monday - Sunday: 3:00 LT - 12:00 LT</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="info-cards">

        <article className="info-card">
          <h4>Quick Response Time</h4>
          <p>
            We typically respond to all inquiries within 24 hours on business days. For urgent requests, please call us directly.
          </p>
        </article>

        <article className="info-card">
          <h4>Free Consultation</h4>
          <p>
            Not sure what you need? Schedule a free consultation call and we'll help you figure out the best solution for your business.
          </p>
        </article>

      </div>

    </section>
  );
};

export default ContactInfo;