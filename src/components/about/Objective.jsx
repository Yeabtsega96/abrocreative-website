import "./style/about.css";

import { RiFocus2Line } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";

const Objective = () => {
  return (
    <section className="objective" aria-label="Company mission vision and values">
      
      <article className="card">
        <span className="icon-span" aria-hidden="true">
          <RiFocus2Line className="mission-icon" />
        </span>

        <h3>Our Mission</h3>
        <p>
          To provide affordable, professional web design services that help Ethiopian small businesses compete and thrive in the digital economy.
        </p>
      </article>

      <article className="card">
        <span className="icon-span" aria-hidden="true">
          <FiEye className="vision-icon" />
        </span>

        <h3>Our Vision</h3>
        <p>
          A future where every Ethiopian business has a strong online presence and the digital tools they need to succeed and grow.
        </p>
      </article>

      <article className="card">
        <span className="icon-span" aria-hidden="true">
          <LuHeart className="value-icon" />
        </span>

        <h3>Our Values</h3>
        <p>
          Affordability, quality, transparency, and genuine commitment to our clients' success. We treat every project as if it were our own.
        </p>
      </article>

    </section>
  );
};

export default Objective;