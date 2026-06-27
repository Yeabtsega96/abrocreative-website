import "./style/contact.css";

const Process = () => {
  return (
    <section className="contact-process" aria-label="Project onboarding process">

      <h2>What Happens Next?</h2>

      <div className="contact-process-cards">

        <article className="contact-process-card">
          <span className="number" aria-hidden="true">1</span>
          <h3>We Review Your Request</h3>
          <p>
            Our team carefully reviews your requirements and prepares a custom proposal
          </p>
        </article>

        <article className="contact-process-card">
          <span className="number" aria-hidden="true">2</span>
          <h3>Get Your Quote</h3>
          <p>
            Within 24 hours, you'll receive a detailed quote and project timeline
          </p>
        </article>

        <article className="contact-process-card">
          <span className="number" aria-hidden="true">3</span>
          <h3>Start Building</h3>
          <p>
            Once approved, we begin designing your professional website
          </p>
        </article>

      </div>
    </section>
  );
};

export default Process;