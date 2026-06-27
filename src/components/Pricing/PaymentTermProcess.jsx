import { FiCheckCircle } from "react-icons/fi";
import "./pricing.css";

const PaymentTermProcess = () => {
  return (
    <section
      className="payment-term-process"
      aria-label="Payment terms and project process"
    >
      <h2 className="headline">Payment Terms & Process</h2>

      <div className="cards">

        <article className="card">
          <h3>Payment Schedule</h3>

          <ul>
            <li>
              <FiCheckCircle className="list-icon" />
              <span>20% deposit to start the project</span>
            </li>

            <li>
              <FiCheckCircle className="list-icon" />
              <span>80% upon completion and approval</span>
            </li>

            <li>
              <FiCheckCircle className="list-icon" />
              <span>Flexible payment plans for Premium packages</span>
            </li>
          </ul>
        </article>

        <article className="card">
          <h3>What's Included</h3>

          <ul>
            <li>
              <FiCheckCircle className="list-icon" />
              <span>Professional design and development</span>
            </li>

            <li>
              <FiCheckCircle className="list-icon" />
              <span>Domain and hosting setup assistance</span>
            </li>

            <li>
              <FiCheckCircle className="list-icon" />
              <span>Training on how to manage your website</span>
            </li>

            <li>
              <FiCheckCircle className="list-icon" />
              <span>Post-launch support period</span>
            </li>
          </ul>
        </article>

      </div>

      <article className="noticing-card">
        <h3>Note on Domain & Hosting</h3>

        <p>
          Domain registration (typically 500–1,000 ETB/year) and web hosting
          (2,000–5,000 ETB/year) are separate costs paid directly to providers.
          We assist you in selecting and setting up everything correctly.
        </p>
      </article>
    </section>
  );
};

export default PaymentTermProcess;