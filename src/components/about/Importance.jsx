import {
  LuUsers,
  LuZap,
  LuHeart,
} from "react-icons/lu";
import { RiFocus2Line } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";
import { FiCoffee } from "react-icons/fi";

import "./style/about.css";

const Importance = () => {
  return (
    <section className="importance">
      <h2 className="headline">What Makes Us Different</h2>

      <p className="sub-headline">
        We're not just building websites—we're building partnerships with Ethiopian businesses
      </p>

      <div className="cards" role="list">
        <article className="card" role="listitem">
          <span className="icon-span" aria-hidden="true">
            <LuUsers className="icon" />
          </span>
          <h3>Local Understanding</h3>
          <p>We understand Ethiopian business culture, customer preferences, and market dynamics.</p>
        </article>

        <article className="card" role="listitem">
          <span className="icon-span" aria-hidden="true">
            <LuZap className="icon" />
          </span>
          <h3>Fast Turnaround</h3>
          <p>Most projects completed within 1-2 weeks so you can start growing your business faster.</p>
        </article>

        <article className="card" role="listitem">
          <span className="icon-span" aria-hidden="true">
            <GrShieldSecurity className="icon" />
          </span>
          <h3>Quality Guarantee</h3>
          <p>We stand behind our work with revisions until you're completely satisfied.</p>
        </article>

        <article className="card" role="listitem">
          <span className="icon-span" aria-hidden="true">
            <LuHeart className="icon" />
          </span>
          <h3>Personal Touch</h3>
          <p>Direct communication with our team—no automated systems or outsourcing.</p>
        </article>

        <article className="card" role="listitem">
          <span className="icon-span" aria-hidden="true">
            <RiFocus2Line className="icon" />
          </span>
          <h3>Results-Focused</h3>
          <p>Every design decision is made to help you attract and convert more customers.</p>
        </article>

        <article className="card" role="listitem">
          <span className="icon-span" aria-hidden="true">
            <FiCoffee className="icon" />
          </span>
          <h3>Ethiopian Pride</h3>
          <p>Supporting local businesses and contributing to Ethiopia's digital economy.</p>
        </article>
      </div>
    </section>
  );
};

export default Importance;